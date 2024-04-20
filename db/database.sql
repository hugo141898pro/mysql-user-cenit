CREATE DATABASE IF NOT EXISTS users;

USE users;

CREATE TABLE loginUsers(
    id int(11) not null AUTO_INCREMENT,
    name varchar(30) DEFAULT NULL,
    nameUser varchar(30) DEFAULT NULL,
    email varchar(50) DEFAULT NULL,
    password varchar(150) DEFAULT NULL,
    primary key(id)
);

INSERT INTO loginUsers VALUES 
(1, 'hugo', 'hugo141898', 'hugo141898@gmail.com', '141898'),
(2, 'jhony', 'jhony141898', 'jhony141898@gmail.com', '141898'),
(3, 'felipe', 'felipe141898', 'felipe141898@gmail.com', '141898');

select * from loginUsers