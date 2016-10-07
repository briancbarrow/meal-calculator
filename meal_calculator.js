var Diner = require('./diner.js');
var Bill = require('./bill.js');

var Brian = new Diner('Brian', [['Burger', 12.00],['Fries', 2.50]])
var George = new Diner('George', [['Burger', 10]]);
var Erin = new Diner('Erin', [['Soup', 5.65], ['Salad', 6.57]]);
George.addDish('Drink', 1.50);
var bill = new Bill(Brian, George, Erin);

bill.grandTotal();
bill.totalTip();
bill.itemizedTotal();
