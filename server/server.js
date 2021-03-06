/* eslint-disable no-console */
const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(port, () => console.log(`Crypto server is hanging out at http://localhost:${port}`));
