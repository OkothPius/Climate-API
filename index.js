const PORT = 8000
const cheerio = require('cheerio');
const axios = require('axios');
const express = require('express')

const app = express() //Initialise

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))
