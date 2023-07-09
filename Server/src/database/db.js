const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('notes', 'root', 'tushar', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

try {
    sequelize.authenticate();
    console.log("MySQL database is connected");
} catch (error) {
    console.error("Database is disconnected", error);
}

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Define and assign the 'notes' model to 'db.notes'
db.notes = require('../models/notesModel')(sequelize, DataTypes);

// Synchronize all defined models with the database
sequelize.sync({ force: false });

module.exports = db;
