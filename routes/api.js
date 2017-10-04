const express = require('express');
const Router = express.Router();
const { db }  = require('../models');
const { Hotel } = require('../models');
const { Activity } = require('../models');
const { Restaurant } = require('../models');
const { Place } = require('../models');


Router.get('/', (req, res, next) =>{
    const hotelPromise = Hotel.findAll({ include: [{ all: true }] });
    const activityPromise = Activity.findAll({ include: [{ all: true }] });
    const restaurantPromise = Restaurant.findAll({ include: [{ all: true }] });
    Promise.all([hotelPromise, activityPromise, restaurantPromise])
        .then((fulfilledProms) =>{
        res.json(fulfilledProms);
        })
});

module.exports = Router;



