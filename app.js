//use nodemon --exec npm start in development

//-----DEPENDENCIES AND GLOBAL VARIABLES-----------------------------------------
const dotenv = require('dotenv');
dotenv.config()
const db = require('./db/connection')

//------INITIALIZATION----------------------------------------------------------------

//start app after DB connection
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
   // app start code here
});