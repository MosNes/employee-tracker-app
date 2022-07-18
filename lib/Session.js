const Department = require('./Department');
const Role = require('./Role');
const Employee = require('./Employee');
const { getDepartments, getDepartmentById } = require('./sqlFunctions');

class Session {

    initializeSession(){
        console.log('Session Started.');
        getDepartments();
        getDepartmentById(3).then(result => console.log(result[0][0]));
    }

}



module.exports = Session;