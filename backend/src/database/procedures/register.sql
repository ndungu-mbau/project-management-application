

CREATE OR ALTER PROCEDURE registerUser(
    @id VARCHAR(100),
    @fullName VARCHAR(200),
    @email VARCHAR(200),
    @password VARCHAR(200)
    
     )
AS 
BEGIN
     INSERT INTO Users(id,fullName,email,password
     )
     VALUES( @id ,
    @fullName ,@email ,
     @password )

END

DROP PROCEDURE registerUser