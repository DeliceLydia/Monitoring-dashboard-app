const express = require ('express');
const WebsiteController = require('../controllers/websiteControllers.js');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the Website Management API!');
});
router.post('/websites', WebsiteController.addWebsite);

module.exports = router;
