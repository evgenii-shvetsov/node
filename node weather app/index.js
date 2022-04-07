const request = require('request');
const argv = require('yargs').argv;

let apiKey = '544a2c49caebb982cc8672a4787b02ed';
let city = argv.c || 'san francisco';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;




request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    let weather = JSON.parse(body);
    let message = 
    `
    It's ${weather.main.temp} degrees in ${weather.name}.
    The min temperature is ${weather.main.temp_min} degrees. 
    The max temperature is ${weather.main.temp_max} degrees.
    `
    console.log(message)
    //console.log('body:', body);
  }
});

