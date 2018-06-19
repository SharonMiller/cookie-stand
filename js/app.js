'use strict';
//create global variables
var storeContainer = document.getElementById('store-container');
var hourArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

//College and Pence
var collegeAndPence = {
  name: 'College And Pence',
  minCust: 23,
  maxCust: 65,
  avgCookiePerSale: 6.3,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookies: 0,
};
//create random number of customers using a method
collegeAndPence.randomCust = function () {
  return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.maxCust);
};
//create loop for customers per hour
collegeAndPence.calculateCustomersPerHour = function () {
  for(var i in hourArray){
    this.customersPerHour[i] = (this.randomCust());
    // console.log(this.customersPerHour[i]);
  }
};
//function to calculate total cookies per hour - create variables and then a loop to move through the array.
collegeAndPence.calculateCookiesPerHour = function () {
  this.calculateCustomersPerHour();
  for (var i in hourArray) {
    this.cookiesPerHour[i] = Math.ceil(this.customersPerHour[i] * this.avgCookiePerSale);
    this.totalCookies += this.cookiesPerHour[i];
  }
  // console.log(this.cookiesPerHour);
  // console.log(this.totalCookies);
};



//write cookies per hour to HTML
collegeAndPence.showHtmlCookiesPerHour = function(){
  this.calculateCookiesPerHour();
  //create header
  var h1El = document.createElement('h1');
  h1El.textContent = this.name;
  storeContainer.appendChild(h1El);
  //creat unordered list
  var ulEl = document.createElement('ul');
  for (var i in hourArray) {
    var liEl = document.createElement('li');
    liEl.textContent = hourArray[i] + (': ') + this.cookiesPerHour[i] + ' cookies';
    ulEl.appendChild(liEl);
    storeContainer.appendChild(ulEl);
    console.log(liEl.textContent);
    console.log(this.cookiesPerHour[i]);
  }
  liEl.textContent = 'Total: ' + this.totalCookies + ' cookies';
};


collegeAndPence.showHtmlCookiesPerHour();








// cookiesHour = function  () {
//   return this.avgCookiePerSale * this.randomCust();
// };

// //calculate the hours with a for loop
// for ( hours = 0; hours < 15; hours++) {
//   collegeAndPence.cookiesPerHour.push(collegeAndPence.cookiesHour());

// collegeAndPence.render = function () {
//   var liEl = document.createElement('li');
//   liEl.textContent = this.cookiesPerHour;
//   storeListUlEl.appendChild();
//   return toString.this.cookiesPerHour;
// }



// this code does not work:
// liEl = document.createElement('li');

// for (var i in this.cookiesPerHour) {
//   liEl = document.createElement('li');

//   liEl.textContent = collegeAndPence.cookiesPerHour[i].hours;
//   liEl.appendChild(liEl);
//   console.log(liEl.textContent);
// }

// liEl.textContent = collegeAndPence.cookiesPerHour;

// console.log(collegeAndPence.cookiesPerHour);
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

