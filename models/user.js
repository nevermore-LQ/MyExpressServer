var express = require("express");
const db = require("../db");
const { v4: uuidv4 } = require("uuid");

exports.show_flights = async () => {
  console.log("get called");
  try {
    const { rows } = await db.query("select * from flights");
    console.log(rows);
    return rows;
  } catch (error) {
    throw error;
  }
};

exports.book = async (newbooking) => {
  console.log("body is", newbooking);
  const newBooking = newbooking;
  newBooking.bookingId = uuidv4();
  try {
    const result = await db.query(
      "insert into booking (bookingId, customerName, destination, price, transportation, date, ticketNumber, totalCost) values ($1, $2, $3, $4, $5, $6, $7, $8)",
      [
        newBooking.bookingId,
        newBooking.customerName,
        newBooking.desName,
        newBooking.price,
        newBooking.transportation,
        new Date(newBooking.date),
        newBooking.ticketNumber,
        newBooking.totalCost,
      ]
    );
    console.log(result);
    return { status: "success" };
  } catch (error) {
    throw error;
  }
};
