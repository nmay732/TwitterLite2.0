CREATE TABLE Users (user_id varchar(30) PRIMARY KEY NOT NULL, fName varchar(30), lName varchar(30), password varchar(30) NOT NULL);
CREATE TABLE User_Follows (user_id varchar(30) NOT NULL, follows_id varchar(30) NOT NULL);
CREATE TABLE Tweets (user_id varchar(30) PRIMARY KEY NOT NULL, tweet varchar(250), mention varchar(30), hash varchar(30), tweet_time datetime DEFAULT current_timestamp);

