// 'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Website extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The models/index file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Website.init({
    name: DataTypes.STRING,
    url: DataTypes.STRING,
    status: {
      type: DataTypes.STRING,
      defaultValue: 'unknown',
    },
    lastChecked: {
      type: DataTypes.DATE,
      defaultValue: null,
    },
  }, {
    sequelize,
    modelName: 'Website',
  });
  return Website;
};