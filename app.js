//-----DEPENDENCIES AND GLOBAL VARIABLES-----------------------------------------
const dotenv = require('dotenv');
dotenv.config()
const db = require('./db/connection')
 

//------INITIALIZATION----------------------------------------------------------------

async function test() {
    (await db).query(`SELECT * FROM employee`).then(result => {
        console.log(result[0])
    });
}
    
test();