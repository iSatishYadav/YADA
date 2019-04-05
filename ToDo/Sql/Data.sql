SET IDENTITY_INSERT [dbo].[Status] ON 
GO
INSERT [dbo].[Status] ([Id], [Description], [IsActive]) VALUES (1, N'New', 1)
GO
INSERT [dbo].[Status] ([Id], [Description], [IsActive]) VALUES (2, N'Done', 1)
GO
INSERT [dbo].[Status] ([Id], [Description], [IsActive]) VALUES (3, N'Doing', 1)
GO
SET IDENTITY_INSERT [dbo].[Status] OFF
GO