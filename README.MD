\*installededd a devdependency ###concurrently
-which help to run our backend and frount end react at the same time
-inside server's or main package.json -> under script we add [
"start": "node server.js",
"server": "nodemon server.js",
"client": "npm start --prefix client",
"clientinstall":"npm install --prefix client",
"dev":"concurrently \"npm run server\" \"npm run client\""
]
-this will help to run client and server concurrently when we call "npm run dev"

##settting proxy inside client package.json
-this is done so that we dont need to call "http://localhost:5000/api/" etc when making request with axios.
-we can simply call it as "/api"
-so inside client's package.json --> below browserLists add
[
"proxy":"http://localhost:5000"
]

##config/default.json

- purpose of this file is for global varialbes
  -mongo atlas connection url will go here
  -this is part of the config package [npm i config]
  -so if we create a config folder and a default.json inside and create some values , you
  have access to those values throughout entire app

config/db.js

-we use this file to connect mongoose to our database

##for sending json data through postman
-IN HEADERS:- key= Content-Type value: application/json
-IN BODY: send the data in a object

##express-validator
to check what value we have send from front to back. it validates the type.. limit etc
it is addedc as second parameter in the route

#after installling npx create-react-app
-remove .git , .gitignore , reademe.md etc from client
-install inside client [ npm i axios react-router-dom uuid react-transition-group ]
--uuid :- for unique id (we can calll it by : uuid.v4()), react-transition-group:- for some reaCT TRANSITIONS
