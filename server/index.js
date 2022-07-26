const express = require('express');
const path = require('path');
const cors = require('cors');
const router = require('./routes');
const logger = require('./middleware/logger');
const compression = require('compression');
const expressGzipStatic = require('express-static-gzip');
const app = express();

app.use(compression());

app.use(express.json({ limit: '50mb' }));
app.use(expressGzipStatic(path.join(__dirname, '../client/dist')));
app.use(cors());
app.use(logger);

app.use('/', router);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
