'use strict';

// 1 Stores the min/max hourly customers, and the average cookies per customer, in object properties

// 2 Uses a method of that object to generate a random number of customers per hour. Objects/Math/random
// Math.floor(Math.random() * 50 + 30),

// 3 Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated

//4  Store the results for each location in a separate array... perhaps as a property of the object representing that location

// 5 Display the values of each array as unordered lists in the browser
//names of stores collegeAndPence, chandlerAnd14th, fresnoAnd14th, minnesotaAndBond, neNeffAndNeWilliamson
// var stores = [];
// var storeListUlEl = document.getElementById('store-list');
var hours;
var collegeAndPence = {
  name: 'College And Pence',
  minCust: 23,
  maxCust: 65,
  avgCookiePerSale: 6.3,
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  randomCust: function () {
    //TODO: fix math
    return Math.floor(Math.random() * this.minCust + this.maxCust);
  },
  cookiesHour: function () {
    return this.avgCookiePerSale * this.randomCust();
  },
  cookiesPerHour: []
};
console.log(collegeAndPence.randomCust());
console.log(collegeAndPence.cookiesHour());
// console.log(collegeAndPence);


//calculate the hours with a for loop
for ( hours = 0; hours < 15; hours++) {
  collegeAndPence.cookiesPerHour.push(collegeAndPence.cookiesHour());
}
console.log(collegeAndPence.cookiesPerHour);

// var chandlerAnd14th = {
//   name: 'Chandler and 14th',
//   minCust: 3,
//   maxCust: 24,
//   avgCookieSale: 1.2,
//   randomCust: Math.floor(Math.random() * minCust + maxCust),
// };

// var fresnoAnd14th = {
//   name: 'Fresno and 14th',
//   minCust: 11,
//   maxCust: 38,
//   avgCookieSale: 3.7,
//   randomCust: Math.floor(Math.random() * minCust + maxCust),
// };

// var minnesotaAndBond = {
//   name: 'Minnesota and Bond',
//   minCust: 20,
//   maxCust: 38,
//   avgCookieSale: 2.3,
//   randomCust: Math.floor(Math.random() * minCust + maxCust),
// };

// var neNeffAndNeWilliamson = {
//   name: 'NE Neff and NE Williamson',
//   minCust: 2,
//   maxCust: 16,
//   avgCookieSale: 4.6,
//   randomCust: Math.floor(Math.random() * minCust + maxCust),
// };

// render: function () {
//   var liEl = document.createElement('li');
//   console.log(lieEl.textContent);
// };