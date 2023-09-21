const {Sequelize, DataTypes} = require('sequelize');
const dbConfig = require('../config/ConexionConfig');

// Crear una nueva instancia de Sequelize
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.DIALECT,
})

// Verificar la autenticación de la conexión a la base de datos
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

// Importar y definir el modelo de Employee y VacationRequest
db.employee = require('./Employee')(sequelize, DataTypes);
db.vacationRequest = require('./VacationRequest')(sequelize, DataTypes);

// Establecer la relación entre Employee y VacationRequest
db.employee.hasMany(db.vacationRequest, {
    onDelete: 'CASCADE',
});
db.vacationRequest.belongsTo(db.employee);

// Sincronizar la base de datos con los modelos
sequelize.sync({ force: false }).then(() => {
    console.log('Base de datos y tablas creadas');
});

module.exports = db;
