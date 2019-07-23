module.exports = function() {
    this.dbConnections = [];

    this.dbConnections["instance10"] = {
        host: "instance10.czndmdv7dw6d.us-east-1.rds.amazonaws.com",
        port: "3306",
        user: "indunilrajapakse",
        password: process.env.Password_rdsInstance10,
        database: "indunilrajapakse"
    };
};