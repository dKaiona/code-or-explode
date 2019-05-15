require('dotenv').config();
const express = require('express');


const app = express();
const {SERVER_PORT} = process.env; 

app.use( express.static( `${__dirname}/../build` ) );
app.use(express.json());


app.listen(SERVER_PORT, () => console.log(`I can hear you on ${SERVER_PORT}`))