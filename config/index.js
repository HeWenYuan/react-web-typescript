const fs = require("fs");
const path = require("path");

let config = {};
let default_config = path.join(__dirname, 'config.js');
let local_config = path.join(__dirname, 'local.js');

if (file_exists(local_config)) {
  config = require("./local");
} else {
  config = require("./config");
}

function file_exists(path) {
  try {
    fs.lstatSync(path);
    return true;
  } catch (e) {
    return false;
  }
}

module.exports = config;