var inquirer = require('inquirer');

var fs = require('fs');

var BasicCard = require('./BasicCard.js');
var ClozeCard = require('./ClozeCard.js');

var Card = new ClozeCard()
  Card.createCard()
