'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Website extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The models/index file will call this method automatically.
     */
    static associate(models) {
      // Define associations here if needed
    }
  }

  Website.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          msg: 'The website name must be unique.',
        },
        validate: {
          notEmpty: {
            msg: 'Name cannot be empty.',
          },
          len: {
            args: [3, 50],
            msg: 'Name must be between 3 and 50 characters long.',
          },
        },
      },
      url: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          msg: 'The website URL must be unique.',
        },
        validate: {
          notEmpty: {
            msg: 'URL cannot be empty.',
          },
          isUrl: {
            msg: 'Must be a valid URL (starting with http:// or https://).',
          },
        },
      },
      status: {
        type: DataTypes.STRING,
        defaultValue: 'unknown',
        validate: {
          isIn: {
            args: [['online', 'offline', 'unknown']],
            msg: 'Status must be either "online", "offline", or "unknown".',
          },
        },
      },
      lastChecked: {
        type: DataTypes.DATE,
        defaultValue: null,
      },
    },
    {
      sequelize,
      modelName: 'Website',
    }
  );

  return Website;
};

