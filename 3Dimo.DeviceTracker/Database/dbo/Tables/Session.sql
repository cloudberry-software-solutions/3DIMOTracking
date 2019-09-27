CREATE TABLE [dbo].[Session] (
    [Id]        UNIQUEIDENTIFIER NOT NULL,
    [Timestamp] DATETIME         NOT NULL,
    [UserId]    UNIQUEIDENTIFIER NOT NULL,
    [Hostname]  NCHAR (255)      NULL,
    CONSTRAINT [PK_Session] PRIMARY KEY CLUSTERED ([Id] ASC)
);

