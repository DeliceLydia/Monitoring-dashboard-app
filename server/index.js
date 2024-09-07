const dotenv = require('dotenv');
const  app = require('./src/index.js');

dotenv.config();
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`We are live on http://localhost:${port}`);
});
