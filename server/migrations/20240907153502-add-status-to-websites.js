// Example: migrations/20240907123456-add-status-to-websites.js
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Websites', 'status', {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: 'unknown',
    });

    await queryInterface.addColumn('Websites', 'lastChecked', {
      type: Sequelize.DATE,
      allowNull: true,
      defaultValue: null,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Websites', 'status');
    await queryInterface.removeColumn('Websites', 'lastChecked');
  },
};
