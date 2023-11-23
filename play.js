
// const connect = require("./client");
// const conn = require("./client");

const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");
connect();

setupInput();

