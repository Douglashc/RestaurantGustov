// Definición del modelo VacationRequest

module.exports = (sequelize, DataTypes) => {
    const VacationRequest = sequelize.define('VacationRequest', {
      startDateVacation: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      endDateVacation: {
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
  