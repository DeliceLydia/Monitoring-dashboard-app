const axios = require("axios");
const models = require("../../models");

class WebsiteStatusController {
  static async checkWebsiteStatus(req, res) {
    const { id } = req.params;

    try {
      const website = await models.Website.findByPk(id);

      if (!website) {
        return res
          .status(404)
          .json({ message: "Website not found.", status: "unknown" });
      }

      try {
        if (
          !website.url.startsWith("http://") &&
          !website.url.startsWith("https://")
        ) {
          throw new Error(
            "Invalid URL format. URL must start with http:// or https://"
          );
        }

        const response = await axios.get(website.url, { timeout: 5000 });

        const newStatus = response.status === 200 ? "up" : "down";
        await website.update({ status: newStatus, lastChecked: new Date() });

        return res.status(200).json({
          message: "Website status checked successfully!",
          status: newStatus,
        });
      } catch (error) {
        await website.update({ status: "down", lastChecked: new Date() });

        return res.status(200).json({
          message: "Website is currently down.",
          status: "down",
        });
      }
    } catch (error) {
      return res
        .status(500)
        .json({ message: error.message, status: "unknown" });
    }
  }
}

module.exports = WebsiteStatusController;
