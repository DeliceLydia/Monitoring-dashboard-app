const express = require('express');
const cors = require('cors');
const routes = require('./routes/websiteRoutes.js');
const { monitorWebsites } = require('./helpers/websiteStatusHelper'); 

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', routes);

module.exports = app;
