using Logging;
using Logging.Interfaces;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading;
using XDA;
using Xsens;

namespace DeviceTracker
{
    class Program
    {
        private static MyXda _xda;
        private static XsDevice _measuringDevice = null;
        private static Dictionary<XsDevice, MyMtCallback> _measuringMts = new Dictionary<XsDevice, MyMtCallback>();
        private static Dictionary<uint, ConnectedMtData> _connectedMtwData = new Dictionary<uint, ConnectedMtData>();
        private static int scanRetries = 10;
        private static ILogger logger;
        private static Timer timer;
        static void Main(string[] args)
        {
            logger = new FileLogger();
            if (!scanMeasuringDevices())
            {
                logger.Log("Could not detect any contected dongle or station.");
                return;
            }

            setupTrackers();
            measure();

            timer = new Timer(TimerCallback, null, 0, 20);
            
            Console.ReadLine();
        }

        private static void TimerCallback(Object o)
        {
            string text = "";
            foreach (KeyValuePair<uint, ConnectedMtData> data in _connectedMtwData)
            {
                if (data.Value._containsUtcTime)
                {
                    var time = data.Value._utcTime;
                    text += $"{data.Key:X8} Timestamp: {time.m_day}, {time.m_hour}:{time.m_minute}:{time.m_second}:{time.m_nano} \n";
                }

                text += $"{data.Key:X8} Has Raw Acceleration: {data.Value._containsRawAcceleration} \n";
                text += $"{data.Key:X8} Has Free Acceleration: {data.Value._containsFreeAcceleration} \n";
                text += $"{data.Key:X8} Has Calibrated Acceleration: {data.Value._containsCalibratedAcceleration} \n";
                text += $"{data.Key:X8} BatteryLevel: {data.Value._batteryLevel} \n";
                text += $"{data.Key:X8} EffectiveUpdateRate: {data.Value._effectiveUpdateRate} \n";
                text += $"{data.Key:X8} SignalStrenght: {data.Value._rssi} \n";
                text += $"{data.Key:X8} Temperature: {data.Value._temperature} \n";

                if (data.Value._containsFreeAcceleration)
                {
                    text += $"{data.Key:X8} Free Acceleration Cartesian Length (m/s2): {data.Value._freeAcceleration.cartesianLength()} \n";
                    text += $"{data.Key:X8} Free Acceleration Data (m/s2): {data.Value._freeAcceleration.data()} \n";
                }

                if (data.Value._containsCalibratedAcceleration)
                {
                    text += $"{data.Key:X8} Calibrated Acceleration Cartesian Length (m/s2): {data.Value._calibratedAcceleration.cartesianLength()} \n";
                    //text += $"{3:X8} Calibrated Acceleration Value (m/s2): {data.Value._calibratedAcceleration.value(data.Key)}";
                }
            }

            File.AppendAllText($@"C:\3dimo.devicetracker.logs\data_{DateTime.Now.ToString("yyyyMMdd")}.txt", text);
            
            GC.Collect();
        }

        private static void measure()
        {
            _connectedMtwData.Clear();

            foreach (var detectedDevices in _xda._DetectedDevices)
            {
                _measuringDevice = _xda.getDevice(detectedDevices.deviceId());
                _measuringDevice.gotoMeasurement();
                var deviceIds = _measuringDevice.children();
                for (uint i = 0; i < deviceIds.size(); i++)
                {
                    var trackingDevice = new XsDevice(deviceIds.at(i));
                    var callback = new MyMtCallback();

                    var mtwData = new ConnectedMtData();
                    _connectedMtwData.Add(trackingDevice.deviceId().toInt(), mtwData);

                    // connect signals
                    callback.DataAvailable += new EventHandler<DataAvailableArgs>(_callbackHandler_DataAvailable);

                    trackingDevice.addCallbackHandler(callback);
                    _measuringMts.Add(trackingDevice, callback);
                    logger.Log($"Completed setting up tracker {trackingDevice.deviceId().ToString()} for measuring.");
                }
                logger.Log($"Completed setting up device {detectedDevices.deviceId().ToString()} for measuring.");
            }
        }

        private static void setupTrackers()
        {
            foreach (var detectedDevice in _xda._DetectedDevices)
            {
                if (!detectedDevice.deviceId().isWirelessMaster())
                {
                    logger.Log($"Not wireless Master ... exiting for device {detectedDevice.deviceId().ToString()}");
                    break;
                }

                _xda.openPort(detectedDevice);
                var masterInfo = new MasterInfo(detectedDevice.deviceId());
                masterInfo.ComPort = detectedDevice.portName();
                masterInfo.BaudRate = detectedDevice.baudrate();
                
                //TODO: Find out what the channel number represents and means
                _xda.getDevice(detectedDevice.deviceId()).enableRadio(11);
                logger.Log($"Radio enabled for device {detectedDevice.deviceId().ToString()}");
            }
        }

        private static bool scanMeasuringDevices()
        {
            var retries = 0;
            _xda = new MyXda();
            while (retries < scanRetries)
            {
                _xda.scanPorts();
                if (_xda._DetectedDevices.Any())
                {
                    logger.Log($"{_xda._DetectedDevices.Count()} Devics Detected after {retries} retries.");
                    logger.Log($"IDs: { string.Join(", ", _xda._DetectedDevices.Select(d => d.deviceId().ToString())) }");
                    return true;
                }

                retries++;
            }

            return false;
        }

        static void _callbackHandler_DataAvailable(object sender, DataAvailableArgs e)
        {
            var battery = e.Device.batteryLevel();
            //Getting Euler angles.
            XsEuler oriEuler = e.Packet.orientationEuler();
            var rawAcceleration = e.Packet.rawAcceleration();
            var xsRawGpsTimeUtc = e.Packet.rawGpsTimeUtc();
            var altitude = e.Packet.altitude();
            var altitudeMsl = e.Packet.altitudeMsl();

            _connectedMtwData[e.Device.deviceId().toInt()]._orientation = oriEuler;
            _connectedMtwData[e.Device.deviceId().toInt()]._xsRawGpsTimeUtc = xsRawGpsTimeUtc;
            _connectedMtwData[e.Device.deviceId().toInt()]._temperature = e.Packet.temperature();
            _connectedMtwData[e.Device.deviceId().toInt()]._rawAcceleration = rawAcceleration;
            _connectedMtwData[e.Device.deviceId().toInt()]._calibratedAcceleration = e.Packet.calibratedAcceleration();
            _connectedMtwData[e.Device.deviceId().toInt()]._freeAcceleration = e.Packet.freeAcceleration();
            _connectedMtwData[e.Device.deviceId().toInt()]._utcTime = e.Packet.utcTime();


            _connectedMtwData[e.Device.deviceId().toInt()]._batteryLevel = battery;
            _connectedMtwData[e.Device.deviceId().toInt()]._rssi = e.Device.lastKnownRssi();

            _connectedMtwData[e.Device.deviceId().toInt()]._containsRawAcceleration = e.Packet.containsRawAcceleration();
            _connectedMtwData[e.Device.deviceId().toInt()]._containsCalibratedAcceleration = e.Packet.containsCalibratedAcceleration();
            _connectedMtwData[e.Device.deviceId().toInt()]._containsFreeAcceleration = e.Packet.containsFreeAcceleration();
            _connectedMtwData[e.Device.deviceId().toInt()]._containsUtcTime = e.Packet.containsUtcTime();

        }


        private void disposeDevices()
        {
            if (_measuringDevice != null)
                _measuringDevice.clearCallbackHandlers();

            _measuringMts.Clear();

            _xda.Dispose();
            _xda = null;
        }
    }
}
