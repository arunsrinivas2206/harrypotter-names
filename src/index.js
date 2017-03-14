var harryPotterNames = require("./characters.json");
var uniqueRandomArray = require("unique-random-array");

module.exports = {
	all: harryPotterNames,
	random: uniqueRandomArray(harryPotterNames),
};
