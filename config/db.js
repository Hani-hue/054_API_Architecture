const db = require('../models');

async function connectToDatabase() {
  try {
    await db.sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');

    await db.sequelize.sync({ alter: true });
    console.log('Database synchronized successfully.');

  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

module.exports = connectToDatabase;