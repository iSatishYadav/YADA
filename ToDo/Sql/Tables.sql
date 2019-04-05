
CREATE TABLE [dbo].[Status](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Description] [nvarchar](100) NOT NULL,
	[IsActive] [bit] NOT NULL,
 CONSTRAINT [PK_Status] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
))
GO

CREATE TABLE [dbo].[ToDo](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[UniqueId] [uniqueidentifier] NOT NULL,
	[Name] [nvarchar](100) NOT NULL,
	[StatusId] [int] NOT NULL,
	[Owner] [nvarchar](200) NOT NULL,
	[CreatedOn] [datetime2](7) NOT NULL,
 CONSTRAINT [PK_ToDo] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
))
GO

ALTER TABLE [dbo].[ToDo]  WITH CHECK ADD  CONSTRAINT [FK_ToDo_Status] FOREIGN KEY([StatusId])
REFERENCES [dbo].[Status] ([Id])
GO

ALTER TABLE [dbo].[ToDo] CHECK CONSTRAINT [FK_ToDo_Status]
GO

