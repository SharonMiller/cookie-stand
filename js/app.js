'use strict';

// 1 Stores the min/max hourly customers, and the average cookies per customer, in object properties

// 2 Uses a method of that object to generate a random number of customers per hour. Objects/Math/random
// Math.floor(Math.random() * 50 + 30),

// 3 Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated

//4  Store the results for each location in a separate array... perhaps as a property of the object representing that location

// 5 Display the values of each array as unordered lists in the browser

var collegeAndPence = {
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
  cookiesPerHour: Math.floor(Math.random() * minCust + maxCust),
};

var chandlerAnd14th = {
  minCust: 3,
  maxCust: 24,
  avgCookieSale: 1.2,
  cookiesPerHour: Math.floor(Math.random() * minCust + maxCust),
};

var fresnoAnd14th = {
  minCust: 11,
  maxCust: 38,
  avgCookieSale: 3.7,
  cookiesPerHour: Math.floor(Math.random() * minCust + maxCust),
};

var minnesotaAndBond = {
  minCust: 20,
  maxCust: 38,
  avgCookieSale: 2.3,
  cookiesPerHour: Math.floor(Math.random() * minCust + maxCust),
};

var neNeffAndeNeWilliamson = {
  minCust: 2,
  maxCust: 16,
  avgCookieSale: 4.6,
  cookiesPerHour: Math.floor(Math.random() * minCust + maxCust),
};

