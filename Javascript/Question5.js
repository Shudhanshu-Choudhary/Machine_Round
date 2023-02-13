//5.Find a 14 years ago date from a new Date()?

var currentDate = new Date();

// get the current year and substracting 14 from it to get the 14 year ago year.
var year = currentDate.getFullYear() - 14;

// replace the result year with the current year to get the date
currentDate.setFullYear(year);

console.log(`Fourteen year ago date will be ${currentDate}`);