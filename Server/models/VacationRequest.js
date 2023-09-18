module.exports = (sequelize, DataTypes) => {
    const VacationRequest = sequelize.define('VacationRequest', {
      startDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      endDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM('Activo', 'Expirado', 'Pendiente'),
        allowNull: false,
        defaultValue: 'Pendiente',
      },
    });
    return VacationRequest;
};
  