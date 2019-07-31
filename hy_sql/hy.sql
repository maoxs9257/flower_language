--创建花语的数据库
SET NAMES UTF8;
DROP DATABASE IF EXISTS hy;
CREATE DATABASE hy CHARSET=UTF8;
USE hy;
/*用户信息*/
CREATE TABLE hy_user(
    uid INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(32),
    upwd VARCHAR(32),
    email VARCHAR(32),
    phone VARCHAR(16),

    avatar VARCHAR(128),            #头像图片路径
    user_name VARCHAR(32),          #用户姓名
    gender INT                    #性别，0-女  1-男
);
/*用户登录信息表*/
CREATE TABLE hy_login(
    lid INT PRIMARY KEY AUTO_INCREMENT,
    lname VARCHAR(32),
    lpwd VARCHAR(32)
);
INSERT INTO hy_login VALUES (null,'ge123',md5('123456'));
INSERT INTO hy_login VALUES (null,'jun123',md5('234567'));
INSERT INTO hy_login VALUES (null,'gj123456',md5('123456'));