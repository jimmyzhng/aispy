DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS videos CASCADE;

  CREATE TABLE users (
    id SERIAL PRIMARY KEY NOT NULL,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL

  );

  CREATE TABLE videos (
    id SERIAL PRIMARY KEY NOT NULL,
    preview VARCHAR(255),
    name VARCHAR(255),
    date DATE,
    building VARCHAR(255),
    user_id INT,
    past_broadcast BOOLEAN,
    FOREIGN KEY (user_id) REFERENCES users(id)
  );