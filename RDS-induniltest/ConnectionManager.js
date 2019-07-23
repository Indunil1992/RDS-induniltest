module.exports = function() {
    this.dbConnections = [];

    this.dbConnections["INDinstance2"] = {
        host: process.env.EndPoint_rdsINDinstance2,
        port: process.env.Port_rdsINDinstance2,
        user: process.env.User_rdsINDinstance2,
        password: process.env.Password_rdsINDinstance2,
        database: "indpalitha"
    };
};