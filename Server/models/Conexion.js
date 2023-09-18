const {Sequelize, DataTypes} = require('sequelize');
const dbConfig = require('../config/ConexionConfig');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.DIALECT,
})

sequelize.authenticate()
    .then(() => {
        console.log('Connected..');
    })
    .catch(error => {
        console.log(error);
    })

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.employee = require('./Employee')(sequelize, DataTypes);
db.vacationRequest = require('./VacationRequest')(sequelize, DataTypes);

db.employee.hasMany(db.vacationRequest);
db.vacationRequest.belongsTo(db.employee);

sequelize.sync({ force: false }).then(() => {
    console.log('Base de datos y tablas creadas');
});

module.exports = db;