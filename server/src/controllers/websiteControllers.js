const models = require('../../models');

class WebsiteController {
  static async addWebsite(req, res) {
    const { name, url } = req.body;

    if (!name || !url) {
      return res.status(400).json({ error: 'Name and URL are required.' });
    }

    try {
      const existingWebsite = await models.Website.findOne({
        where: {
          [models.Sequelize.Op.or]: [{ name }, { url }]
        }
      });

      if (existingWebsite) {
        return res.status(409).json({ error: 'Name or URL already exists.' });
      }

      const website = await models.Website.create(req.body);
      return res.status(201).json({
        message: 'Website added successfully!',
        website,
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = WebsiteController;
