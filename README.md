# jf-note-saver

This note saver application is designed to allow the user to create, save, and delete notes.

The technologies used to create this app include:
  Node:
    - node.js
    - express.js
  HTML
  CSS
  Javascript/Jquery
  
  This app is deployed using Heroku, please follow the link to use the deployed application: https://jfnotesaver.herokuapp.com/
  
  The server set up for the app is contained in the server.js file. This file is also setting up the middleware as well as the html and api routers.
  ![server screenshot](https://github.com/JerryForsberg/jf-note-saver/blob/master/assets/note%20saver%20server.PNG)
  
  The html router is using get to send the index html page and notes html page to the user. 
  
  The api router is using get post and delete, to retrieve the api information, add to the api, and delete items from the api. 
  
  The index.js file contains the logic for the front end of the app, giving it it's functionality and allowing the user to interact with the app. The html files are both calling     the index.js file as opposed to adding the logic directly into the html files, allowing for cleaner, more easily read html and javascript.
  
  
