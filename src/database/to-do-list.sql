-- Active: 1674743571078@@127.0.0.1@3306
CREATE TABLE users(
    id  TEXT PRIMARY KEY UNIQUE,
    name TEXT ,
    email TEXT UNIQUE  ,
    password TEXT,
    created_at TEXT 

);

DROP TABLE users;


CREATE TABLE tasks(
    id  PRIMARY KEY UNIQUE NOT NULL,
    title TEXT NOTT NULL,
    description TEXT NOT NULL,
    created_at TEXT DEFAULT (DATETIME()) NOT NULL

);


INSERT INTO tasks(id, title, description)
VALUES
    ("t001", "Implementar o Header", "Criar o componente Header do site"),
    ("t002", "Implementar o footer", "Criar o componente Footer do site"),
    ("t003", "Testar site", "Testar de usabilidade de todo o site"),
    ("t004", "Deploy do site", "Subir o site no surge")
;



CREATE TABLE users_tasks(
    userId TEXT NOT NULL,
    taskId TEXT NOT NULL,
   FOREIGN KEY (userID) REFERENCES users (id),
    Foreign Key (taskId) REFERENCES tasks (id)




);

INSERT INTO users(id, name,email, password)
VALUES
    ("f001", "Fulano", "fulano@email.com", "fulano123");



INSERT INTO users(id, name,email, password)
VALUES
    ("f002", "Beltrana", "beltrana@email.com", "beltrana123");


INSERT INTO users_tasks(userId, taskId)
VALUES
    ("f001", "t001"),
    ("f002", "t002"),
    ("f001", "t003"),
    ("f002", "t004");

