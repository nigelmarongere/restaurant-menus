const { sequelize } = require('../db');
const { Sequelize, DataTypes } = require('sequelize');

// TODO - create a Menu model
const Menu = sequelize.define('Menu', {
    title: {
        type: DataTypes.STRING
    }
});

module.exports = {Menu};