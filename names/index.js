let list = require("../country/state/city/index");
let firstNameFun = require("../utilities/utils/index");

function getPeopleInCity(list) {
  const result = firstNameFun(list);
  return result;
}

module.exports = getPeopleInCity;
