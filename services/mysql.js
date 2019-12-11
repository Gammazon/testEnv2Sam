const mysql = require("mysql");
// --------------------------------------------------------------------------------------------------
if (process.env.NODE_ENV === "production") {
  var connection = mysql.createConnection({
    // Setup environment variables for elastic beanstalk
    host: process.env.MYSQL_SERVER,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
  });
} else if (process.env.NODE_ENV === "development") {
  // See Navbar-Proxy/config/sqlConfig.example.js for how to setup
  var { connection } = require("../database/mysqlConfig");
}
connection.connect(); // Connect to DB
connection.escape(); // Prevent SQL injection attacks
// --------------------------------------------------------------------------------------------------

module.exports = {
  searchTable
};
