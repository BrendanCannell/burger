drop database if exists `burger_db`;
create database `burger_db`;
use `burger_db`;

create table `burger` (
  id int auto_increment primary key,
  name varchar(255) not null,
  devoured boolean not null
);