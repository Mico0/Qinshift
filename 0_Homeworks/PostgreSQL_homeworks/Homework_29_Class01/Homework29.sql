CREATE TABLE student (
id serial PRIMARY KEY,
firstname VARCHAR(20),
lastname VARCHAR(20),
dateofbirth DATE,
enrolleddate DATE,
gender VARCHAR(6),
nationalidnumber INTEGER,
studentcardnumber INTEGER
);

INSERT INTO student(firstname, lastname, dateofbirth, enrolleddate, gender, nationalidnumber, studentcardnumber)
VALUES('Milan', 'Ognjanoski', '1994-04-02', '2024-10-14', 'male', 020499231221, 10196);

INSERT INTO student(firstname, lastname, dateofbirth, enrolleddate, gender, nationalidnumber, studentcardnumber)
VALUES('Michael', 'Bisping', '1989-02-21', '2024-10-14', 'male', 1223456, 10197);

SELECT * FROM student;

CREATE TABLE teacher(
id serial PRIMARY KEY,
firstname VARCHAR(20),
lastname VARCHAR(20),
dateofbirth DATE,
academicrank VARCHAR(15),
hiredate DATE
);

INSERT INTO teacher(firstname, lastname, dateofbirth, academicrank, hiredate)
VALUES('Miles', 'Kennedy', '1995-07-10', 'senior', '2023-12-17'),
	  ('Jesse', 'Pinkman', '1992-04-21', 'junior', '2020-10-11');

SELECT * FROM teacher;

CREATE TABLE gradedetails (
id serial PRIMARY KEY,
gradeid INTEGER,
achievementtypeid INTEGER,
achievementpoints INTEGER,
achievementmaxpoints INTEGER,
achievementdate DATE
);

DROP TABLE gradedetails;

INSERT INTO gradedetails(gradeid, achievementtypeid, achievementpoints, achievementmaxpoints, achievementdate)
VALUES (100, 001, 90, 100, '2025-01-12'),
	   (101, 002, 99, 100, '2024-03-14');

SELECT * FROM gradedetails;

CREATE TABLE course (
id serial PRIMARY KEY,
name VARCHAR(20),
credit INTEGER,
academicyear INTEGER,
SEMESTER INTEGER
);

INSERT INTO course (name, credit, academicyear, semester)
VALUES ('Milan', 801, 2022, 3),
 	   ('Judith', 778, 2019, 4);

SELECT * FROM course;

CREATE TABLE grade (
id serial PRIMARY KEY,
studentid INTEGER,
courseid INTEGER,
grade SMALLINT,
comment VARCHAR(100),
createddate DATE
);

INSERT INTO grade (studentid, courseid, grade, comment, createddate)
VALUES (01, 101, 4, 'good at math', '2014-06-24'),
 	   (02, 102, 5, 'social skills', '2020-01-02' );

SELECT * FROM grade;

CREATE TABLE achievementtype (
id serial PRIMARY KEY,
name VARCHAR(20),
description VARCHAR(100),
participationrate INTEGER
);

INSERT INTO achievementtype (name, description, participationrate) 
VALUES ('Selena', 'finished elementary,high school and have graduated from the school of fine arts', 335);

SELECT * FROM achievementtype;

UPDATE achievementtype
SET participationrate = 206
WHERE id = 1;

CREATE TABLE student (
id serial PRIMARY KEY,
firstname VARCHAR(20),
lastname VARCHAR(20),
dateofbirth DATE,
enrolleddate DATE,
gender VARCHAR(6),
nationalidnumber INTEGER,
studentcardnumber INTEGER
);

INSERT INTO student(firstname, lastname, dateofbirth, enrolleddate, gender, nationalidnumber, studentcardnumber)
VALUES('Milan', 'Ognjanoski', '1996-01-12', '2024-10-14', 'male', 1121996500, 10196);

INSERT INTO student(firstname, lastname, dateofbirth, enrolleddate, gender, nationalidnumber, studentcardnumber)
VALUES('Michael', 'Bisping', '1989-02-21', '2024-10-14', 'male', 1223456, 10197);

SELECT * FROM student;

CREATE TABLE teacher(
id serial PRIMARY KEY,
firstname VARCHAR(20),
lastname VARCHAR(20),
dateofbirth DATE,
academicrank VARCHAR(15),
hiredate DATE
);

INSERT INTO teacher(firstname, lastname, dateofbirth, academicrank, hiredate)
VALUES('Miles', 'Kennedy', '1995-07-10', 'senior', '2023-12-17'),
	  ('Jesse', 'Pinkman', '1992-04-21', 'junior', '2020-10-11');

SELECT * FROM teacher;

CREATE TABLE gradedetails (
id serial PRIMARY KEY,
gradeid INTEGER,
achievementtypeid INTEGER,
achievementpoints INTEGER,
achievementmaxpoints INTEGER,
achievementdate DATE
);

DROP TABLE gradedetails;

INSERT INTO gradedetails(gradeid, achievementtypeid, achievementpoints, achievementmaxpoints, achievementdate)
VALUES (100, 001, 90, 100, '2025-01-12'),
	   (101, 002, 99, 100, '2024-03-14');

SELECT * FROM gradedetails;

CREATE TABLE course (
id serial PRIMARY KEY,
name VARCHAR(20),
credit INTEGER,
academicyear INTEGER,
SEMESTER INTEGER
);

INSERT INTO course (name, credit, academicyear, semester)
VALUES ('Milan', 801, 2022, 3),
 	   ('Judith', 778, 2019, 4);

SELECT * FROM course;

CREATE TABLE grade (
id serial PRIMARY KEY,
studentid INTEGER,
courseid INTEGER,
grade SMALLINT,
comment VARCHAR(100),
createddate DATE
);

INSERT INTO grade (studentid, courseid, grade, comment, createddate)
VALUES (01, 101, 4, 'good at math', '2014-06-24'),
 	   (02, 102, 5, 'social skills', '2020-01-02' );

SELECT * FROM grade;

CREATE TABLE achievementtype (
id serial PRIMARY KEY,
name VARCHAR(20),
description VARCHAR(100),
participationrate INTEGER
);

INSERT INTO achievementtype (name, description, participationrate) 
VALUES ('Selena', 'finished elementary,high school and have graduated from the school of fine arts', 335);

SELECT * FROM achievementtype;

UPDATE achievementtype
SET participationrate = 206
WHERE id = 1;

