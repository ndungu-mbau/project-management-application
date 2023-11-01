
CREATE TABLE Users(
    id VARCHAR(100) NOT NULL,
    fullName VARCHAR(200) NOT NULL,
    email VARCHAR(300) NOT NULL UNIQUE,
    password VARCHAR(200) NOT NULL,
    role VARCHAR(20) Default 'user',
    welcomed BIT Default 0
)

SELECT * FROM Users
DROP TABLE Users

