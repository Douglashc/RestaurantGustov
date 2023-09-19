module.exports = (sequelize, DataTypes) => {
    const VacationRequest = sequelize.define('VacationRequest', {
      startDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      endDate: {
        type: DataTypes.DATEONLY,
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
  