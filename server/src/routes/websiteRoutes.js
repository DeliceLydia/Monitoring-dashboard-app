const express = require ('express');
const WebsiteController = require('../controllers/websiteControllers.js');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the Website Management API!');
});
router.post('/websites', WebsiteController.addWebsite);
router.get('/websites', WebsiteController.getAllWebsites);
router.get('/websites/:id', WebsiteController.getWebsiteById);

module.exports = router;
