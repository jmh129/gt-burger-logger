var connection = require("./connection.js");

var orm = {
  all: function (tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  insertOne: function (table, col, vals, cb) {
    var queryString = "INSERT INTO " + table;
    queryString += " (";
    queryString += col[0] + "," + col[1];
    queryString += ") ";
    queryString += "VALUES (";
    queryString += "?,?";
    queryString += ") ";
    connection.query(queryString, vals, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  updateOne: function (table, condition, cb) {
    var queryString = "UPDATE " + table;
    queryString += " SET devoured =";
    queryString += "1";
    queryString += " WHERE ";
    queryString += condition;

    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
};

module.exports = orm;
