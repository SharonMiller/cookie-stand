'use strict';
//create global variables
var storeTable = document.getElementById('store-table');
var hourArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var storeArray = [];

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
new Store('College and Pence', 23, 65, 6.3);
new Store('Chandler and 14th', 3, 24, 1.2);
new Store('Fresno and 14th', 11, 38, 3.7);
new Store('Minnesota and Bond', 20, 38, 2.3);
new Store('NE Neff and NE Williamson', 2, 16, 4.6);

Store.prototype.randomCust = function () {
  for (var i in hourArray) {
    var randomCust = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    this.customersPerHour[i] = randomCust;
  }
};

Store.prototype.calculateCookiesPerHour = function () {
  this.randomCust();
  this.totalCookies = 0;

  for (var i in hourArray) {
    this.cookiesPerHour[i] = Math.ceil(this.customersPerHour[i] * this.avgCookiePerSale);
    this.totalCookies += this.cookiesPerHour[i];
  }

};
//create header row with hoursArray - need loop
var makeHeaderRow = function () {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Store Locations';
  trEl.appendChild(thEl);
  for (var i in hourArray) {
    // trEl = document.createElement('tr');
    thEl = document.createElement('th');
    thEl.textContent = hourArray[i];
    trEl.appendChild(thEl);
  }
  //make last cell in header row
  // // trEl = document.createElement('tr');
  thEl = document.createElement('th');
  thEl.textContent = 'Daily Totals';
  trEl.appendChild(thEl);

  storeTable.appendChild(trEl);
};
//create table
Store.prototype.render = function () {
  this.calculateCookiesPerHour();
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.name;
  trEl.appendChild(tdEl);
  //create for loop with array cookies per hour
  for (var i in this.cookiesPerHour) {
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesPerHour[i];
    trEl.appendChild(tdEl);
  }

  tdEl = document.createElement('td');
  tdEl.textContent = this.totalCookies;
  trEl.appendChild(tdEl);
  storeTable.appendChild(trEl);
  //render store array
};
function renderAllStores() {
  storeTable.innerHTML = '';

  makeHeaderRow();

  for (var i in storeArray) {
    storeArray[i].render();
  }

  makeFooter();

}

renderAllStores();

//create footer row for total
function makeFooter() {
  var bigDaddyTotal = 0;
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  trEl.appendChild(thEl);
  thEl.textContent = 'Total:';

  for (var i in hourArray) {
    var totalHourly = 0;
    var tdEl = document.createElement('td');

    for (var j in storeArray) {
      totalHourly += storeArray[j].cookiesPerHour[i];
    }
    tdEl.textContent = totalHourly;
    trEl.appendChild(tdEl);

  }
  for (var k in storeArray) {
    bigDaddyTotal += storeArray[k].totalCookies;
  }
  thEl = document.createElement('th');
  thEl.textContent = bigDaddyTotal;
  trEl.appendChild(thEl);
  storeTable.appendChild(trEl);
  console.log(bigDaddyTotal);
}
// renderAllStores();

//event handler function
function handlerFormSubmit(event) {
  event.preventDefault();

  if (!event.target.name.value || !event.target.minCust.value || !event.target.maxCust.value || !event.target.avgCookiePerSale) {
    return alert('Fields may not be empty');
  }
  var name = event.target.name.value;
  var minCust = parseInt(event.target.minCust.value);
  var maxCust = parseInt(event.target.maxCust.value);
  var avgCookiePerSale = parseFloat(event.target.avgCookiePerSale.value);

  event.target.name.value = null;
  event.target.minCust.value = null;
  event.target.maxCust.value = null;
  event.target.avgCookiePerSale.value = null;
  new Store(name, minCust, maxCust, avgCookiePerSale);
  renderAllStores();
}



var storeForm = document.getElementById('add-location');
// var storeForm = document.getElementbyId ('store-form');
//event listender form submit//
storeForm.addEventListener('submit', handlerFormSubmit);

// console.log(bigDaddyTotal);
// var thEl = document.createElement('th');
// thEl.textContent = bigDaddyTotal;
// trEl.appendChild(thEl);