\*installededd a devdependency ###concurrently
-which help to run our backend and frount end react at the same time

config/default.json

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
