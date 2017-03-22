var express = require('express');
var router = express.Router();
var cron = require('cron');
var request = require('request');

var cronJob = cron.job("0 */10 * * * *", function(){
  console.log("inizio");
    request.get('http://localhost:3000/', function (error, response, body) {

    });
    router.get('*', function(req, res) {
        res.redirect('http://www.weathersicily.it/Servizi/WeatherSicily.html')
    });

    console.info('cron job completed');
});
cronJob.start();

module.exports = router;
