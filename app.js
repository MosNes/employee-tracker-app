//-----DEPENDENCIES AND GLOBAL VARIABLES-----------------------------------------
const dotenv = require('dotenv');
dotenv.config();
const Session = require('./lib/Session');

//------INITIALIZATION----------------------------------------------------------------

// async function test() {
//     const db = await dbPromise;
//     let result = await db.query(`SELECT * FROM employee WHERE id = 10`);
//     return result;
// }
    
// test().then(result => console.log(result[0]));

//creates a new Session
new Session().initializeSession();


