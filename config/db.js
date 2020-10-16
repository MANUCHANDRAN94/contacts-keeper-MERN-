// we use this file to connect mongoose to our database

const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI'); //! when u need to take some value from CONFIG u need to use this

const connectDB = async () => {
    //connecting with async await
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        });

        console.log("MOngoDB Connected")
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }


    // connecting with promise
    /* mongoose.connect(db, {
         useNewUrlParser: true,
         useCreateIndex: true,
         useFindAndModify: false,
         useUnifiedTopology: true
     })
         .then(() => console.log("MOngoDB Connected"))
         .catch(err => {
             console.error(err.message);
             process.exit(1);
         }); */
};


module.exports = connectDB;