const express = require('express');
const https = require('node:https');
const fs = require('node:fs');
require('dotenv').config();

app = express();
const port = 3000;
const api_key = process.env.API_KEY;

app.get('/', function(req, res){
    const url = `https://api.openweathermap.org/data/2.5/weather?id=${api_key}`;
    https.get(url, function(response){
        console.log(response.statusCode)

        response.on('data', (d) => {
            const weatherData = JSON.parse(d);
            let temp = weatherData.main.temp;
            let description = weatherData.weather[0].description;
    
            res.send(`<center><h1>The temp in your city is ${temp}</h1><br/>
            <h1>The description of the weather today: ${description}</h1></center>`);
          });
    });
});

app.listen(port, function(){
    console.log(`Server running on the port ${port}`)
});