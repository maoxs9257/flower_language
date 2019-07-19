--创建花语的数据库
SET NAMES UTF8;
DROP DATABASE IF EXISTS huayu;
CREATE DATABASE huayu CHARSET=UTF8;
USE huayu;
/*用户信息*/
CREATE TABLE huayu_user(
    uid INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(32),
    upwd VARCHAR(32),
    email VARCHAR(32),
    phone VARCHAR(16),

    avatar VARCHAR(128),            #头像图片路径
    user_name VARCHAR(32),          #用户姓名
    gender INT                    #性别，0-女  1-男
);