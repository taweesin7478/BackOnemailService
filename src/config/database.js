require("dotenv").config();
var mongoose = require("mongoose");

function makeNewConnection(uri) {
  const db = mongoose.createConnection(uri, {
    dbName: DB_DATABASE,
    user: DB_USERNAME,
    pass: DB_PASSWORD,
  });
  // const db = mongoose.createConnection(uri)

  db.on("error", function (error) {
    console.error(`Error in ${uri} connection:`, error);
    console.log({
      dbName: `${DB_DATABASE}`,
      user: `${DB_USERNAME}`,
      pass: `${DB_PASSWORD}`,
    });
    mongoose.disconnect();
    process.exit(1);
  });

  db.on("connected", function () {
    console.log(`${uri} connected!`);
  });

  db.once("open", function () {
    console.log(`${uri} connection opened!`);
  });

  db.on("reconnected", function () {
    console.log(`${uri} reconnected!`);
  });
  return db;
}

const DB_DATABASE = process.env.DB_DATABASE;
const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_AUTHSOURCE = process.env.DB_AUTHSOURCE;
// const U  = encodeURIComponent(DB_USERNAME)
const P = encodeURIComponent(DB_PASSWORD);

const uri = `mongodb://${DB_USERNAME}:${P}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}/?authSource=${DB_AUTHSOURCE}`;
// const uri = `mongodb://${DB_USERNAME}:${P}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}`;

const connection = makeNewConnection(uri);

module.exports = connection;
