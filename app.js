//-----DEPENDENCIES AND GLOBAL VARIABLES-----------------------------------------

//fetches database password from .env file
const dotenv = require('dotenv');
dotenv.config();

const Session = require('./lib/Session');

//------INITIALIZATION----------------------------------------------------------------

//creates a new Session
new Session().initializeSession();


