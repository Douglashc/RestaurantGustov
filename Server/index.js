const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

app.listen(port, () => {
    console.log('Servidor escuchando en el puerto ', port);
});