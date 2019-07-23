module.exports = function() {
    this.dbConnections = [];

    this.dbConnections["instance10"] = {
        host: process.env.EndPoint_rdsInstance10,
        port: process.env.Port_rdsInstance10,
        user: process.env.User_rdsInstance10,
        password: process.env.Password_rdsInstance10,
        database: "indunilrajapakse"
    };
};