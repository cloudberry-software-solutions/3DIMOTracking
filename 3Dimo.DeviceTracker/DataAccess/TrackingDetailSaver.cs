using System;
using System.Data.SqlClient;

namespace DataAccess
{
    public class TrackingDetailSaver
    {
        private string connectionString = @"Data Source=.;Initial Catalog=3Dimo;Integrated Security=True";
        //private string connectionString = @"Data Source=.\MSSQLSERVER;Initial Catalog=3Dimo;Integrated Security=True";
        private SqlConnection connection;
        private SqlDataAdapter adapter;
        
        public TrackingDetailSaver()
        {
            connection = new SqlConnection(connectionString);
            adapter = new SqlDataAdapter();

        }
        public bool SaveSession(Guid sessionId, DateTime timestamp, Guid userId, string hostname)
        {
            var sql = $@"INSERT INTO [dbo].[Session]
                               ([Id]
                               ,[Timestamp]
                               ,[UserId]
                               ,[Hostname])
                         VALUES 
                               ('{sessionId}',
                               '{timestamp}',
                               '{userId}',
                               '{hostname}')";

            return DBInstert(sql);
        }

        public bool SaveTrackingDetail(
            uint trackerId, 
            Guid sessionId,
            DateTime timeOfArrival,
            double timeOfArrivalTicks,
            double batteryLevel,
            double signalStrength,
            double freeAccelerationCartesianLength,
            double calibratedAccelerationCartesianLength)
        {
            var sql = $@"INSERT INTO [dbo].[TrackingDetail]
                            ([TrackerId]
                            ,[SessionId]
                            ,[TimeOfArrival]
                            ,[TimeOfArrivalTicks]
                            ,[BatteryLevel]
                            ,[SignalStrength]
                            ,[FreeAccelerationCartesianLength]
                            ,[CalibratedAccelerationCartesianLength])
                        VALUES
                             ({trackerId},
                             '{sessionId}',
                             '{timeOfArrival}',
                             {timeOfArrivalTicks},
                             {batteryLevel},
                             {signalStrength},      
                             {freeAccelerationCartesianLength},
                             {calibratedAccelerationCartesianLength})";

            return DBInstert(sql);
        }

        private bool DBInstert(string sql)
        {
            connection.Open();
            var command = new SqlCommand(sql, connection);
            adapter.InsertCommand = command;
            var affectedRows = adapter.InsertCommand.ExecuteNonQuery();

            command.Dispose();
            connection.Close();

            return affectedRows != 0;

        }
    }
}
