const pg = require("pg");
let types = pg.types;
let parseFunc = (value) => {
  return value;
};
types.setTypeParser(1082, parseFunc);
const { Pool } = pg;
const conString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString: conString });
module.exports = {
  query: (text, params, callback) => {
    console.log("executed query", { text });
    return pool.query(text, params, callback);
  },
};
