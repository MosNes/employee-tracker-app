const { getDepartments } = require('../lib/sqlFunctions');

test('Gets list of all departments', () => {
    const result = getDepartments().then(
        expect(result.length).toEqual(9)
    );
    
});
