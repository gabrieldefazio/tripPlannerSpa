const express = require('express');
const Router = express.Router();
const { db }  = require('../models');
const { Hotel } = require('../models');
const { Activity } = require('../models');
const { Restaurant } = require('../models');
const { Place } = require('../models');


Router.use('/', (req, res, next) =>{
    const hotelPromise = Hotel.findAll({ include: [{ all: true }] });
    const activityPromise = Activity.findAll({ include: [{ all: true }] });
    const restaurantPromise = Restaurant.findAll({ include: [{ all: true }] });
    Promise.all([hotelPromise, activityPromise, restaurantPromise])
        .then((fulfulledProms) =>{
        res.json(fulfulledProms);
        })
});

module.exports = Router;



