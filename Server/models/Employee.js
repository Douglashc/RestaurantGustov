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
            type: DataTypes.DATE,
            allowNull: false,
        },
    });
    return Employee;
};