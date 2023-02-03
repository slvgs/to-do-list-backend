-- Active: 1674743571078@@127.0.0.1@3306
CREATE TABLE users(
    id INTEGER PRIMARY KEY UNIQUE,
    name TEXT ,
    email TEXT UNIQUE  ,
    password TEXT

);

DROP TABLE users;

SELECT * FROM users;


CREATE TABLE tasks(
    id  PRIMARY KEY UNIQUE NOT NULL,
    title TEXT NOTT NULL,
    description TEXT NOT NULL UNIQUE,
    created_at TEXT DATETIME

);

SELECT * FROM tasks;

CREATE TABLE users_tasks(
    userId TEXT NOT NULL,
    taskId TEXT NOT NULL


);

SELECT * FROM users_tasks;

