module.exports = function() {
    this.dbConnections = [];

    this.dbConnections["instance1"] = {
        host: process.env.EndPoint_rdsInstance1,
        port: process.env.Port_rdsInstance1,
        user: process.env.User_rdsInstance1,
        password: process.env.Password_rdsInstance1,
        database: "induniltestdb"
    };
};