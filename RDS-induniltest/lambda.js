let SL_AWS = require('slappforge-sdk-aws');
let connectionManager = require('./ConnectionManager');
const rds = new SL_AWS.RDS(connectionManager);

exports.handler = function (event, context, callback) {


    // You can pass the existing connection to this function.
    // A new connection will be created if it's not present as the third param 
    // You must always end/destroy the DB connection after it's used
    rds.query({
        instanceIdentifier: 'instance1',
        query: 'CREATE TABLE Persons1(     PersonID int,     LastName varchar(255),     FirstName varchar(255),     Address varchar(255),     City varchar(255)  );',
        inserts: [2, "hera", "sach", "no142 pallekele", "Kandy"]
    }, function (error, results, connection) {
        if (error) {
            console.log("Error occurred");
            throw error;
        } else {
            console.log("Success")
            console.log(results);
        }

        connection.end();
    });




    callback(null, { "message": "Successfully executed" });
}