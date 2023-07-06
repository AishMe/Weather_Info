const express = require('express');
const https = require('node:https');
const fs = require('node:fs');

app = express();
port = 3000;

app.get('/', function(req, res){
    const url = 'https://api.openweathermap.org/data/2.5/weather?id=2172797&appid=d9d025ece6b9faaa458d9081d08d0f97';
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