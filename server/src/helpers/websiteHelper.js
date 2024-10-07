const models = require('../../models');

const findWebsiteById = async (id) => {
  try {
    const website = await models.Website.findByPk(id);
    return website;
  } catch (error) {
    throw new Error('Error fetching website by ID: ' + error.message);
  }
};

module.exports = { findWebsiteById };
