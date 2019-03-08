const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const { Car } = require('./models');

const app = express();

app.use(logger("dev"));
app.use(bodyParser.json());

// write a route handler for creating a new Car

// write a route handler for getting all cars

// write a route handler for getting 1 car by id

// write a route handler for deleting a car

app.get('/', (req, res) => {
  res.json({msg: 'welcome to the car app'});
});


app.listen(3004, () => console.log('up and running'));
