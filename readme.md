Backend:

Follow these steps to run the app: 

1- connect to mysql create a new database named arabesqueDB

    mysql -u [username] -p

    create database ToDoDB;

2- create a new user named 'dbadmin' and grant it all privilges on that database

(if you want to change the password, don't forgot to change it in DATABASES section in settings.py file)

    create user 'dbadmin' identified by '1234'; 

    grant all on arabesqueDB.* to 'dbadmin'@'%';

3- now install all modules from requirements.txt

    pip install -r requirements.txt

4- create migrations and apply them (you need to be in the same folder that has manage.py)

    python manage.py makemigrations

    python manage.py migrate

5- populate the database

    mysql -u dbadmin -p

    use arabesqueDB;

    INSERT INTO todoapp_category(title) VALUES('Work'), ('Home'), ('Market'), ('Fun');
    
6- run the server :

    python manage.py runserver


Frontend:

at the moment, all users can see all the tasks, they aren't specified to the the current logged in user, if i had more time i'll change it, also there is no style ;)

1- install npm modules:
    make sure you are in the same folder as angular.json and open a cmd and run : npm install

2- run the front end server: 
    ng serve

