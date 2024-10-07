const axios = require("axios");
const models = require("../../models");

async function checkWebsiteStatus(website) {
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
    const newStatus = response.status === 200 ? "online" : "offline";
    await website.update({ status: newStatus, lastChecked: new Date() });
  } catch (error) {
    await website.update({ status: "offline", lastChecked: new Date() });
  }
}

async function monitorWebsites() {
  try {
    const websites = await models.Website.findAll();

    for (const website of websites) {
      await checkWebsiteStatus(website);
    }
  } catch (error) {
    console.error("Error monitoring websites:", error.message);
  }
}

monitorWebsites();
setInterval(monitorWebsites, 60000);

module.exports = { monitorWebsites, checkWebsiteStatus };
