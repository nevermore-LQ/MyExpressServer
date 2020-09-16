const db = require("../db");
const { v4: uuid } = require("uuid");
const bcrypt = require("bcrypt");
const passport = require("passport");

exports.getFlights = async function () {
  try {
    const { rows } = await db.query("select * from flights");
    return rows;
  } catch (error) {
    throw error;
  }
};

exports.getFlight = async function (id) {
  try {
    console.log("id is " + id);
    const { rows } = await db.query("select * from flights where id=$1", [id]);
    console.log(rows);
    return rows;
  } catch (error) {
    throw error;
  }
};

exports.editFlight = async function (
  { name, price, spaceship, broomstick, description },
  id
) {
  console.log(
    "Edit Flight: ",
    name,
    price,
    spaceship,
    broomstick,
    description,
    id
  );
  let imgName = `/images/stars/${name}.jpg`;
  try {
    const {
      rows,
    } = await db.query(
      "update flights set name=$1,price=$2,spaceship=$3,broomstick=$4,description=$5,img=$6 where id=$7 returning *",
      [
        name,
        price,
        Boolean(spaceship),
        Boolean(broomstick),
        description,
        imgName,
        id,
      ]
    );
    return rows;
  } catch (error) {
    throw error;
  }
};

exports.addFlight = async function ({
  name,
  price,
  spaceship,
  broomstick,
  description,
}) {
  let id = uuid();
  console.log(
    "Edit Flight: ",
    name,
    price,
    spaceship,
    broomstick,
    description,
    id
  );
  let imgName = `/images/stars/${name}.jpg`;
  try {
    const {
      rows,
    } = await db.query(
      "insert into flights (id,name,price,spaceship,broomstick,description,img)values($1,$2,$3,$4,$5,$6,$7) returning *",
      [
        id,
        name,
        price,
        Boolean(spaceship),
        Boolean(broomstick),
        description,
        imgName,
      ]
    );
    return rows;
  } catch (error) {
    throw error;
  }
};

exports.deleteFlight = async function (id) {
  try {
    console.log("id is " + id);
    const result = await db.query("delete from flights where id=$1", [id]);
    return "Success";
  } catch (error) {
    throw error;
  }
};

exports.getBookings = async (id) => {
  try {
    const { rows } = await db.query("select * from booking order by date");
    // console.log(rows);
    return rows;
  } catch (error) {
    throw error;
  }
};

exports.deleteBooking = async (id) => {
  console.log("deletebooking id", id);
  try {
    const result = await db.query("delete from booking where bookingid=$1", [
      id,
    ]);
    return "Success";
  } catch (error) {
    throw error;
  }
};

exports.getUserByUsername = async (username) => {
  console.log("getUserByUsername is called");
  try {
    const { rows } = await db.query(
      "select * from accounts where username=$1",
      [username]
    );
    if (rows.length == 0) {
      return null;
    } else if (rows.length == 1) {
      return rows[0];
    } else {
      throw error("multiple accounts with same username were found");
    }
  } catch (error) {
    throw error;
  }
};

exports.signup = async ({ username, password }) => {
  console.log(
    `signup is called with username=${username}, password=${password}`
  );
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const id = uuid();
    const result = await db.query(
      "insert into accounts (id, username, password)values($1,$2,$3)",
      [id, username, hashedPassword]
    );
  } catch (error) {
    throw error;
  }
};

exports.checkduplicate = async (username) => {
  try {
    const {
      rows,
    } = await db.query("select count(*) from accounts where username=$1", [
      username,
    ]);
    console.log("username check result is ", rows[0].count);
    if (rows[0].count == 0) {
      return "OK";
    } else {
      return "duplicated";
    }
  } catch (error) {
    throw error;
  }
};
