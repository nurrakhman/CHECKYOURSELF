
const bloodPressure = require('./bloodPressure');
const bloodSugar = require('./bloodSugar');
const akg = require('./akg');

// import bloodPressure from "bloodPressure";
// import bloodSugar from "bloodSugar";
// import bmi from "bmi";
// import cholesterol from "cholesterol";
console.log(bloodSugar.calculateBloogSugar(18,110));
console.log(bloodPressure.count(90,70));
console.log(akg.value(false, 75, 168, 28, 2));
