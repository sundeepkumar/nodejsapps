let request = require('request');
let apiKey = 'b6fe5273e6a089cad258567c0ca333bc';
const CITIES = [
    'Kolkata',
    'Bangalore',
    'Lucknow',
    'Allahbad',
    'Delhi'
];

const city = CITIES[Math.floor(Math.random()*CITIES.length)];
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

request(url, function(err,response,body) {
    console.log('Fetching the weather!');
    if(err){
        console.log('There was an error getting the weather');
    }
    else {
        let weather = JSON.parse(body);
        let message =`It's ${weather.main.temp} degress in ${weather.name}!`;
        console.log(message);
    }
    greet();
});

function greet() {
    console.log('Weather fetched!!!');
}