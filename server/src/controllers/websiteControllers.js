const models = require("../../models");
const { monitorWebsites } = require('../helpers/websiteStatusHelper');
const { isURL } = require('validator');

class WebsiteController {
  static async addWebsite(req, res) {
    const { name, url } = req.body;

    if (!name || !url) {
      return res.status(400).json({ error: "Name and URL are required." });
    }

    try {
      const existingWebsite = await models.Website.findOne({
        where: {
          [models.Sequelize.Op.or]: [{ name }, { url }],
        },
      });

      if (existingWebsite) {
        return res.status(409).json({ error: "Name or URL already exists." });
      };

      if (!isURL(url)) {
        return res.status(400).json({ error: 'Invalid URL format.' });
      }

      const website = await models.Website.create(req.body);
      return res.status(201).json({
        message: "Website added successfully!",
        website,
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  static async getAllWebsites(req, res) {
    try {
      const websites = await models.Website.findAll();

      return res.status(200).json({
        message: "Websites retrieved successfully!",
        websites,
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  static async getWebsiteById(req, res) {
    const { id } = req.params;
    try {
      const website = await models.Website.findByPk(id);

      if (!website) {
        return res.status(404).json({ error: "Website not found." });
      }

      return res.status(200).json({
        message: "Website retrieved successfully!",
        website,
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  static async deleteWebsite(req, res) {
    const { id } = req.params;

    try {
      const website = await models.Website.findByPk(id);

      if (!website) {
        return res.status(404).json({ error: "Website not found." });
      }

      await website.destroy();

      return res.status(200).json({
        message: "Website deleted successfully!",
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };
  static async triggerMonitoring(req, res) {
    try {
      await monitorWebsites();
      return res.status(200).json({ message: 'Monitoring triggered successfully.' });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = WebsiteController;
