CREATE TABLE [dbo].[TrackingDetail] (
    [TrackerId]                             BIGINT           NOT NULL,
    [SessionId]                             UNIQUEIDENTIFIER NOT NULL,
    [TimeOfArrival]                         DATETIME         NOT NULL,
    [TimeOfArrivalTicks]                    BIGINT           NULL,
    [BatteryLevel]                          FLOAT (53)       NULL,
    [SignalStrength]                        FLOAT (53)       NULL,
    [FreeAccelerationCartesianLength]       FLOAT (53)       NULL,
    [CalibratedAccelerationCartesianLength] FLOAT (53)       NULL
);

