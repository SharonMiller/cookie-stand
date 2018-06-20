'use strict';
//create global variables
var storeTable = document.getElementById('store-table');
var hourArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var storeArray = [];
// var hourArrayHeader = ['Store Locations','6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

//create constructor function Stores
function Store(name, minCust, maxCust, avgCookiePerSale) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiePerSale = avgCookiePerSale;
  this.customersPerHour = [];
  this.cookiesPerHour = [];
  this.totalCookies = 0;

  //push new store into array
  storeArray.push(this);
}
// console.log(storeArray);
//create Store Instances
new Store ('College and Pence', 23, 65, 6.3);
new Store ('Chandler and 14th', 3, 24, 1.2);
new Store ('Fresno and 14th', 11, 38, 3.7);
new Store ('Minnesota and Bond', 20, 38, 2.3);
new Store ('NE Neff and NE Williamson', 2, 16, 4.6);

Store.prototype.randomCust = function () {
  for(var i in hourArray){
    var randomCust = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    this.customersPerHour[i] = randomCust;
  }
};

Store.prototype.calculateCookiesPerHour = function (){
  this.randomCust();
  this.totalCookies = 0;

  for (var i in hourArray) {
    this.cookiesPerHour[i] = Math.ceil(this.customersPerHour[i] * this.avgCookiePerSale);

    this.totalCookies += this.cookiesPerHour[i];
  }

};
//create header row with hoursArray - need loop
var makeHeaderRow = function() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Store Locations';
  trEl.appendChild(thEl);
  console.log(trEl);
  for(var i in hourArray) {
    // trEl = document.createElement('tr');
    thEl = document.createElement('th');
    thEl.textContent = hourArray[i];
    trEl.appendChild(thEl);
  }
  storeTable.appendChild(trEl);
};
makeHeaderRow();
//create table
Store.prototype.render = function(){
  this.calculateCookiesPerHour();
  //create tr
  var trEl = document.createElement('tr');
  //create td 
  var tdEl = document.createElement('td');
  //create content (store name)
  tdEl.textContent = this.name;
  //append the TD to the TR
  trEl.appendChild(tdEl);
  //create for loop with array cookies per hour
  for(var i in this.cookiesPerHour){
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesPerHour[i];
    trEl.appendChild(tdEl);
  }
  storeTable.appendChild(trEl);
  //render store array
};
for(var i in storeArray) {
  storeArray[i].render();
}

// render hourArray header row
// for(var j in hourArray) {
//   makeHeaderRow(hourArray[j]);
// }


// tdEl = document.createElement('td');
// //add hourly breakdown of cookies
// tdEl.textContent = this.totalCookies;
// trEl.appendChild(tdEl);
// storeTable.appendChild(tdEl);

// create random number of customers using a method

// console.log(Store.prototype.randomCust());
//create loop for customers per hour

