## Game Plan

1. Setup barebones (server.js, index.html, jQuery, CSS, gitignore, node install, express & body-parser install, nodemon install)
2. Get server online (port 8000) make sure everything is listening
3.

What I know:
+ SQL
+ CSS
+ HTML
+ Basic Javascript

What I need to research:
+ Node.js
+ CRUD

##Basic Logic:

5{
-------------------------------------------
|   TO DO:                                |
|                            ________     |
|new item: _______________  |  ADD   |    |  
|          2                 --------2.a. |
|-----------------------------------------|
| _                 _____                 |
||_|  mow lawn      | X |                 |
|3&4                 ---  2.b.            |
|-----------------------------------------|                                         
| _                 _____                 |
||_|  wash dishes   | X |                 |
|3&4                 --- 2.b.             |
|-----------------------------------------|                                         
| _                 _____                 |
||_|  feed cat      | X |                 |
|3&4                 --- 2.b.             |
|_________________________________________|

Server Stuff
1. Create a database table with a few items to start things off.
2. The client will be able to submit list items that will UPDATE the database.  
  a. An 'add' button will ADD the item to the table with an on-click
      + That item will the be appended on the DOM
  b. An 'X' button will REMOVE (or UPDATE?) the item from the table with an on-click
      + That item will be removed from the DOM
3. Once a task is completed, it will UPDATE the table to reflect completion (change boolean value from false to true)

Front End Stuff    
4. On-click will change update color (starts gray goes to green) and prompt a checkmark animation/image
5. Make a friggin table (duh)


Weekend Challenge #3


Here are the specific components for the challenge:

Create a front end experience (e.g. a form) that allows a user to create a Task.
When the Task is created, it should be stored inside of a database.
Whenever a Task is created, the front end should refresh to show all tasks that need to be completed.
Each Task should have an option to "Complete" or "Delete".
When a Task is complete, its visual representation should change on the front end. For example, the background of the task container could change from gray to green. The complete option should be checked off. Each of these are accomplished in CSS, but will need to hook into logic to know whether or not the task is complete.
Whether or not a Task is complete should also be stored in the database.
Deleting a Task should remove it both from the front end as well as the database.

Database Structure

Please include a database.sql text file in your repo that includes all of your CREATE TABLE queries. This is so we can re-create your database while testing your app.
