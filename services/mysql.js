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

  // this line runs the development mode local mysql
  var { connection } = require("../database/mysqlConfig");
}
connection.connect(); // Connect to DB
connection.escape(); // Prevent SQL injection attacks
// --------------------------------------------------------------------------------------------------

const getProduct = callback => {
  connection.query(`SELECT * FROM products where id = 1;`, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      callback(err, results);
    }
  });
};

// const getProduct = (productID, callback) => {
//   productDB.query(
//     `SELECT * FROM products where id = ${productID};`,
//     (err, results) => {
//       if (err) {
//         console.log(err);
//       } else {
//         callback(err, results);
//       }
//     }
//   );
// };

module.exports = {
  getProduct
};
