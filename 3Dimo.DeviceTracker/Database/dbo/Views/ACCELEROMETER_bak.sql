

CREATE VIEW [dbo].[ACCELEROMETER_bak]
AS
SELECT 
		   [TrackerId]
		  ,[SessionId]
		  ,[Hostname]
		  ,[Timestamp]
		  ,[UserId]
		  ,[TimeOfArrival]
		  ,LagTimeOfArrival
		  ,[TimeOfArrivalTicks]
		  ,[BatteryLevel]
		  ,[SignalStrength]
		  ,[FreeAccelerationCartesianLength]
		  ,INSTANTANEOUS_CHANGE_IN_TIME
		  ,CAST(TIME_SINCE_INCEPTION  AS INT) AS TIME_SINCE_INCEPTION_SECONDS
		  ,TIME_SINCE_INCEPTION
		  ,ABS_CHANGE_IN_ACCELERATION
		  ,INSTANTANEOUS_CHANGE_IN_DISTANCE
		  ,DISTANCE_SINCE_INCEPTION
		  ,CASE WHEN INSTANTANEOUS_CHANGE_IN_TIME = 0 THEN 0 ELSE INSTANTANEOUS_CHANGE_IN_DISTANCE / INSTANTANEOUS_CHANGE_IN_TIME END AS  INSTANTANEOUS_SPEED
		  ,CASE WHEN TIME_SINCE_INCEPTION = 0 THEN 0 ELSE DISTANCE_SINCE_INCEPTION / TIME_SINCE_INCEPTION END AS SPEED_SINCE_INCEPTION
FROM 
(
	select 
		   [TrackerId]
		  ,[SessionId]
		  ,[Hostname]
		  ,[Timestamp]
		  ,[UserId]
		  ,[TimeOfArrival]
		  ,LagTimeOfArrival
		  ,[TimeOfArrivalTicks]
		  ,[BatteryLevel]
		  ,[SignalStrength]
		  ,[FreeAccelerationCartesianLength]
		  ,INSTANTANEOUS_CHANGE_IN_TIME
		  ,SUM(INSTANTANEOUS_CHANGE_IN_TIME) OVER (PARTITION BY Sessionid ORDER BY [TimeOfArrival] ROWS UNBOUNDED PRECEDING) AS TIME_SINCE_INCEPTION
		  ,ABS_CHANGE_IN_ACCELERATION
		  ,0.5*(ABS_CHANGE_IN_ACCELERATION * POWER(INSTANTANEOUS_CHANGE_IN_TIME,2)) as INSTANTANEOUS_CHANGE_IN_DISTANCE
		  ,SUM(0.5*(ABS_CHANGE_IN_ACCELERATION * POWER(INSTANTANEOUS_CHANGE_IN_TIME,2))) OVER (PARTITION BY Sessionid ORDER BY [TimeOfArrival] ROWS UNBOUNDED PRECEDING) AS DISTANCE_SINCE_INCEPTION
	FROM
	(
		SELECT 
				 [TrackerId]
			  ,s.[Id] as [SessionId]
			  ,s.[Hostname]
			  ,s.[Timestamp]
			  ,s.[UserId]
			  ,[TimeOfArrival]
			  ,CASE WHEN LAG([TimeOfArrival],1,0) OVER(PARTITION BY td.Sessionid ORDER BY [TimeOfArrival]) = '1900-01-01 00:00:00.000' THEN [TimeOfArrival] ELSE LAG([TimeOfArrival],1,0) OVER(PARTITION BY td.Sessionid ORDER BY [TimeOfArrival]) END as LagTimeOfArrival
			  ,DATEPART(MILLISECOND, [TimeOfArrival]) / 1000.00 AS TIME_SINCE_INCEPTION
			  ,[TimeOfArrivalTicks]
			  ,[BatteryLevel]
			  ,[SignalStrength]
			  ,[FreeAccelerationCartesianLength]
			  --,[CalibratedAccelerationCartesianLength]
			  ,ABS(DateDiff(MILLISECOND,[TimeOfArrival], CASE WHEN LAG([TimeOfArrival],1,0) OVER(PARTITION BY td.Sessionid ORDER BY [TimeOfArrival]) = '1900-01-01 00:00:00.000' THEN [TimeOfArrival] ELSE LAG([TimeOfArrival],1,0) OVER(PARTITION BY td.Sessionid ORDER BY [TimeOfArrival]) END)) / 1000.00 as INSTANTANEOUS_CHANGE_IN_TIME
			  ,ABS([FreeAccelerationCartesianLength] - LAG([FreeAccelerationCartesianLength],1,0) OVER(PARTITION BY td.Sessionid ORDER BY [TimeOfArrival])) as ABS_CHANGE_IN_ACCELERATION
		  FROM [3Dimo].[dbo].[TrackingDetail] td
		  INNER JOIN dbo.session s on s.id = td.Sessionid
	)a
) F