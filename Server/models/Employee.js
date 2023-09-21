// Definición del modelo Employee

module.exports = (sequelize, DataTypes) => {
    const Employee = sequelize.define('Employee', {
        names: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        surNames: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cellPhone: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        startDate: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        vacationDays: { 
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
    });
    return Employee;
};