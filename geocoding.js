const request = require('request'); 

const url=`https://api.openweathermap.org/data/2.5/onecall?lat=37.8267&lon=-122.4233&appid=b6fe5273e6a089cad258567c0ca333bc&limit=1`;
request({url:url,json:true},(error,response)=>{
    if(error) {
        console.log('Some Error happened');
    }
    else {
        console.log('It is currently '+response.body.current.temp ); 
    }
}); 

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Bengaluru.json?access_token=pk.eyJ1Ijoic3VuZGVlcGt1bWFyIiwiYSI6ImNra3R4dXBwODBtaTkzMHJ1Zzh6aGoweDcifQ.ejXADz9HNZFYeDMK3S2oFQ&limit=1';
request({url:geocodeURL,json:true},(error,response)=>{
    if(error)
    {
        console.log('Some Error happened');
    }
    else {
        const latitude = response.body.features[0].center[0];
        const longitude = response.body.features[0].center[1];
        console.log(latitude, longitude);
    }
});