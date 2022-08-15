const { sequelize } = require('../db');
const { Sequelize, DataTypes } = require('sequelize');

// TODO - create a Restaurant model
const Restaurant = sequelize.define('Restaurant', {
    name: {
        type: DataTypes.STRING
    },
    location: {
        type: DataTypes.STRING
    },
    cuisine: {
        type: DataTypes.STRING
    }
});

module.exports = {Restaurant};