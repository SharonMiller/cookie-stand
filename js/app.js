'use strict';
//create global variables
var storeTable = document.getElementById('store-container');
var hourArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var storeArray = [];

//create function Stores
function Store(name, minCust, maxCust, avgCookiePerSale) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiePerSale = avgCookiePerSale;
  this.cutomersPerHour = [];
  this.cookiesPerHour = [];
  this.totalCookies = 0;

  storeArray.push(this);
}
//create Store Instances
new Store ('College and Pence', 23, 65, 6.3);
// new Store ('Chandler and 14th', 3, 24, 1.2);
// new Store ('Fresno and 14th', 11, 38, 3.7);
// new Store ('Minnesota and Bond', 20, 38, 2.3);
// new Store ('NE NEff and NE Williamson', 2, 16, 4.6);

//create table
Store.prototype.render = function(){
  //create tr
  var trEl = document.createElement('tr');
  //create td 
  var tdEl = document.createElement('td');
  //create content (store name)
  tdEl.textContent = this.name;
  //append the TD to the TR
  trEl.appendChild(tdEl);
  // creat td
  tdEl = document.createElement('td');
  //add hourly breakdown of cookies
  tdEl.textContent = this.totalCookies;
  trEl.appendChild(tdEl);
  storeTable.appendChild(trEl);
};
storeArray[0].render();


//header row
function makeHeaderRow() {
  //create tr
  var trEl = document.createElement('tr');
  //create th
  var thEl = document.createElement('th');
  // give th content (hourArray)
  thEl.textContent = hourArray;
  // append the th to the tr
  trEl.appendChild(thEl);
};
makeHeaderRow();
// College and Pence
// var collegeAndPence = {
//   name: 'College And Pence',
//   minCust: 23,
//   maxCust: 65,
//   avgCookiePerSale: 6.3,
//   customersPerHour: [],
//   cookiesPerHour: [],
//   totalCookies: 0,
// };
// create random number of customers using a method
Store.prototype.randomCust = function () {
  return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.maxCust);
};
console.log(Store.prototype.randomCust());
//create loop for customers per hour
Store.prototype.calculateCustomersPerHour = function () {
  for(var i in hourArray){
    this.customersPerHour[i] = (this.randomCust());
  }
};
//function to calculate total cookies per hour - create variables and then a loop to move through the array.
Store.prototype.calculateCookiesPerHour = function () {
  this.calculateCustomersPerHour();
  for (var i in hourArray) {
    this.cookiesPerHour[i] = Math.ceil(this.customersPerHour[i] * this.avgCookiePerSale);
    this.totalCookies += this.cookiesPerHour[i];
  }
};
//write cookies per hour to HTML render
Store.prototype.showHtmlCookiesPerHour = function(){
  this.calculateCookiesPerHour();
  //create header
  var h1El = document.createElement('h1');
  h1El.textContent = this.name;
  storeContainer.appendChild(h1El);
  //create unordered list
  var ulEl = document.createElement('ul');
  var liEl = '';
  for (var i in hourArray) {
    liEl = document.createElement('li');
    liEl.textContent = hourArray[i] + (': ') + this.cookiesPerHour[i] + ' cookies';
    ulEl.appendChild(liEl);
    console.log(liEl.textContent);
    console.log(this.cookiesPerHour[i]);
  }
  liEl = document.createElement('li');
  liEl.textContent = 'Total: ' + this.totalCookies + ' cookies';
  ulEl.appendChild(liEl);
  storeContainer.appendChild(ulEl);
};

//invoking function
Store.prototype.showHtmlCookiesPerHour();


// //Chandler and Pence

// var chandlerAnd14th = {
//   name: 'Chandler and 14th',
//   minCust: 3,
//   maxCust: 24,
//   avgCookiePerSale: 1.2,
//   customersPerHour: [],
//   cookiesPerHour: [],
//   totalCookies: 0,
// };
// //create random number of customers using a method
// chandlerAnd14th.randomCust = function () {
//   return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.maxCust);
// };
// //create loop for customers per hour
// chandlerAnd14th.calculateCustomersPerHour = function () {
//   for(var i in hourArray){
//     this.customersPerHour[i] = (this.randomCust());
//   }
// };
// //function to calculate total cookies per hour - create variables and then a loop to move through the array.
// chandlerAnd14th.calculateCookiesPerHour = function () {
//   this.calculateCustomersPerHour();
//   for (var i in hourArray) {
//     this.cookiesPerHour[i] = Math.ceil(this.customersPerHour[i] * this.avgCookiePerSale);
//     this.totalCookies += this.cookiesPerHour[i];
//   }
// };

// //write cookies per hour to HTML
// chandlerAnd14th.showHtmlCookiesPerHour = function(){
//   this.calculateCookiesPerHour();
//   //create header
//   var h1El = document.createElement('h1');
//   h1El.textContent = this.name;
//   storeContainer.appendChild(h1El);
//   //create unordered list
//   var ulEl = document.createElement('ul');
//   var liEl = '';
//   for (var i in hourArray) {
//     liEl = document.createElement('li');
//     liEl.textContent = hourArray[i] + (': ') + this.cookiesPerHour[i] + ' cookies';
//     ulEl.appendChild(liEl);
//     console.log(liEl.textContent);
//     console.log(this.cookiesPerHour[i]);
//   }
//   liEl = document.createElement('li');
//   liEl.textContent = 'Total: ' + this.totalCookies + ' cookies';
//   ulEl.appendChild(liEl);
//   storeContainer.appendChild(ulEl);
// };

// //invoke function
// chandlerAnd14th.showHtmlCookiesPerHour();

// //Fresno and 14th

// var fresnoAnd14th = {
//   name: 'Fresno and 14th',
//   minCust: 11,
//   maxCust: 38,
//   avgCookiePerSale: 3.7,
//   customersPerHour: [],
//   cookiesPerHour: [],
//   totalCookies: 0,
// };
// //create random number of customers using a method
// fresnoAnd14th.randomCust = function () {
//   return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.maxCust);
// };
// //create loop for customers per hour
// fresnoAnd14th.calculateCustomersPerHour = function () {
//   for(var i in hourArray){
//     this.customersPerHour[i] = (this.randomCust());
//   }
// };
// //function to calculate total cookies per hour - create variables and then a loop to move through the array.
// fresnoAnd14th.calculateCookiesPerHour = function () {
//   this.calculateCustomersPerHour();
//   for (var i in hourArray) {
//     this.cookiesPerHour[i] = Math.ceil(this.customersPerHour[i] * this.avgCookiePerSale);
//     this.totalCookies += this.cookiesPerHour[i];
//   }
// };

// //write cookies per hour to HTML
// fresnoAnd14th.showHtmlCookiesPerHour = function(){
//   this.calculateCookiesPerHour();
//   //create header
//   var h1El = document.createElement('h1');
//   h1El.textContent = this.name;
//   storeContainer.appendChild(h1El);
//   //create unordered list
//   var ulEl = document.createElement('ul');
//   var liEl = '';
//   for (var i in hourArray) {
//     liEl = document.createElement('li');
//     liEl.textContent = hourArray[i] + (': ') + this.cookiesPerHour[i] + ' cookies';
//     ulEl.appendChild(liEl);
//     console.log(liEl.textContent);
//     console.log(this.cookiesPerHour[i]);
//   }
//   liEl = document.createElement('li');
//   liEl.textContent = 'Total: ' + this.totalCookies + ' cookies';
//   ulEl.appendChild(liEl);
//   storeContainer.appendChild(ulEl);
// };

// //invoke function
// fresnoAnd14th.showHtmlCookiesPerHour();


// //Minnesota and Bond

// var minnesotaAndBond = {
//   name: 'Minnesota and Bond',
//   minCust: 20,
//   maxCust: 38,
//   avgCookiePerSale: 2.3,
//   customersPerHour: [],
//   cookiesPerHour: [],
//   totalCookies: 0,
// };
// //create random number of customers using a method
// minnesotaAndBond.randomCust = function () {
//   return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.maxCust);
// };
// //create loop for customers per hour
// minnesotaAndBond.calculateCustomersPerHour = function () {
//   for(var i in hourArray){
//     this.customersPerHour[i] = (this.randomCust());
//   }
// };
// //function to calculate total cookies per hour - create variables and then a loop to move through the array.
// minnesotaAndBond.calculateCookiesPerHour = function () {
//   this.calculateCustomersPerHour();
//   for (var i in hourArray) {
//     this.cookiesPerHour[i] = Math.ceil(this.customersPerHour[i] * this.avgCookiePerSale);
//     this.totalCookies += this.cookiesPerHour[i];
//   }
// };

// //write cookies per hour to HTML
// minnesotaAndBond.showHtmlCookiesPerHour = function(){
//   this.calculateCookiesPerHour();
//   //create header
//   var h1El = document.createElement('h1');
//   h1El.textContent = this.name;
//   storeContainer.appendChild(h1El);
//   //create unordered list
//   var ulEl = document.createElement('ul');
//   var liEl = '';
//   for (var i in hourArray) {
//     liEl = document.createElement('li');
//     liEl.textContent = hourArray[i] + (': ') + this.cookiesPerHour[i] + ' cookies';
//     ulEl.appendChild(liEl);
//     console.log(liEl.textContent);
//     console.log(this.cookiesPerHour[i]);
//   }
//   liEl = document.createElement('li');
//   liEl.textContent = 'Total: ' + this.totalCookies + ' cookies';
//   ulEl.appendChild(liEl);
//   storeContainer.appendChild(ulEl);
// };

// //invoke function
// minnesotaAndBond.showHtmlCookiesPerHour();

// //Neff and Williamson

// var neffWilliamson = {
//   name: 'NE Neff and NE Williamson',
//   minCust: 2,
//   maxCust: 16,
//   avgCookiePerSale: 4.6,
//   customersPerHour: [],
//   cookiesPerHour: [],
//   totalCookies: 0,
// };
// //create random number of customers using a method
// neffWilliamson.randomCust = function () {
//   return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.maxCust);
// };
// //create loop for customers per hour
// neffWilliamson.calculateCustomersPerHour = function () {
//   for(var i in hourArray){
//     this.customersPerHour[i] = (this.randomCust());
//   }
// };
// //function to calculate total cookies per hour - create variables and then a loop to move through the array.
// neffWilliamson.calculateCookiesPerHour = function () {
//   this.calculateCustomersPerHour();
//   for (var i in hourArray) {
//     this.cookiesPerHour[i] = Math.ceil(this.customersPerHour[i] * this.avgCookiePerSale);
//     this.totalCookies += this.cookiesPerHour[i];
//   }
// };

// //write cookies per hour to HTML
// neffWilliamson.showHtmlCookiesPerHour = function(){
//   this.calculateCookiesPerHour();
//   //create header
//   var h1El = document.createElement('h1');
//   h1El.textContent = this.name;
//   storeContainer.appendChild(h1El);
//   //create unordered list
//   var ulEl = document.createElement('ul');
//   var liEl = '';
//   for (var i in hourArray) {
//     liEl = document.createElement('li');
//     liEl.textContent = hourArray[i] + (': ') + this.cookiesPerHour[i] + ' cookies';
//     ulEl.appendChild(liEl);
//     console.log(liEl.textContent);
//     console.log(this.cookiesPerHour[i]);
//   }
//   liEl = document.createElement('li');
//   liEl.textContent = 'Total: ' + this.totalCookies + ' cookies';
//   ulEl.appendChild(liEl);
//   storeContainer.appendChild(ulEl);
// };

// //invoke function
// neffWilliamson.showHtmlCookiesPerHour();