let getFirstNames = require("../utilities/utils/index.js");
let arr = require("../country/state/city/index.js");
let getPeopleInCity = function (arr) {
  return getFirstNames(arr);
};
console.log(getPeopleInCity(arr));
console.log(getPeopleInCity(arr));
module.exports.getPeopleInCity = getPeopleInCity;
