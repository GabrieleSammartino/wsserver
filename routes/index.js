var express = require('express');
var router = express.Router();
var cron = require('cron');
var request = require('request');
global.a = 0;


var cronJob = cron.job("0 */10 * * * *", function(){
  console.log("inizio");
    request.get('https://wsserverget.herokuapp.com', function (error, response, body) {

    });
    router.get('/', function(req, res) {
        res.redirect('http://www.weathersicily.it/Servizi/WeatherSicily.html')
        a++;
        res.send(a);
    });

    console.info('cron job completed');
});
cronJob.start();

module.exports = router;
