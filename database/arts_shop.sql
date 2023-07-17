CREATE DATABASE arts_shop;
USE arts_shop;

CREATE TABLE Artists (
    ID INT AUTO_INCREMENT,
    Name VARCHAR(255) NOT NULL,
    Bio TEXT,
    Country VARCHAR(255),
    Picture VARCHAR(255),
    PRIMARY KEY (ID)
);

CREATE TABLE Categories (
    ID INT AUTO_INCREMENT,
    Category_Name VARCHAR(255) NOT NULL,
    Description TEXT,
    PRIMARY KEY (ID)
);

CREATE TABLE ArtPieces (
    ID INT AUTO_INCREMENT,
    Title VARCHAR(255) NOT NULL,
    Description TEXT,
    Artist_ID INT,
    Category_ID INT,
    Price DECIMAL(10,2) NOT NULL,
    Image VARCHAR(255),
    Quantity INT NOT NULL,
    Date_Added DATE,
    Date_Sold DATE,
    PRIMARY KEY (ID),
    FOREIGN KEY (Artist_ID) REFERENCES Artists(ID),
    FOREIGN KEY (Category_ID) REFERENCES Categories(ID)
);

CREATE TABLE Customers (
    ID INT AUTO_INCREMENT,
    First_Name VARCHAR(255) NOT NULL,
    Last_Name VARCHAR(255) NOT NULL,
    Email VARCHAR(255) UNIQUE NOT NULL,
    Password CHAR(64) NOT NULL,
    Address VARCHAR(255),
    Country VARCHAR(255),
    City VARCHAR(255),
    Postal_Code VARCHAR(10),
    Phone VARCHAR(15),
    PRIMARY KEY (ID)
);

CREATE TABLE Orders (
    ID INT AUTO_INCREMENT,
    Customer_ID INT,
    Order_Date DATE,
    Status VARCHAR(50),
    Total_Price DECIMAL(10,2),
    PRIMARY KEY (ID),
    FOREIGN KEY (Customer_ID) REFERENCES Customers(ID)
);

CREATE TABLE Order_Details (
    ID INT AUTO_INCREMENT,
    Order_ID INT,
    ArtPiece_ID INT,
    Quantity INT NOT NULL,
    Price_Each DECIMAL(10,2),
    PRIMARY KEY (ID),
    FOREIGN KEY (Order_ID) REFERENCES Orders(ID),
    FOREIGN KEY (ArtPiece_ID) REFERENCES ArtPieces(ID)
);

