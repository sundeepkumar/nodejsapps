const request = require('request');
const forecast = (latitude, longitude, callback)=> {
    const url='https://api.openweathermap.org/data/2.5/onecall?lat='+latitude+'&lon='+longitude+'&appid=b6fe5273e6a089cad258567c0ca333bc&limit=1';
    request({url:url,json:true},(error,response)=>{
        if(error) {
            callback('Some Error happened',undefined);
        }
        else if(response.body.error){
            callback('Unable to find location',undefined);
        }
        else {
            callback(undefined,response.body.current.temp ); 
        }
    }); 
}

module.exports = forecast;