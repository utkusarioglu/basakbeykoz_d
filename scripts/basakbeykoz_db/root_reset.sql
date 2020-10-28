use mysql;
SET PASSWORD FOR 'root'@'localhost' = PASSWORD('root');
SET PASSWORD FOR 'root'@'%' = PASSWORD('root');
flush privileges;