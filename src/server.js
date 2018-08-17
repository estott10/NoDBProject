const express= require('express');
const bodyParser= require('body-parser');
const cors= require('cors');

const app= express();

app.use( bodyParser.json() );
app.use( cors() );

const wc= require('./weather_controller');
const ec= require('./events_controller');

const weatherbaseUrl= require('');
const eventsbaseUrl= require('');


//weather
app.post(weattherbaseUrl, wc);
app.get(weatherbaseUrl, wc);
app.put(weatherbaseUrl, wc);
app.delete(weatherbaseUrl, wc);


//events
app.post(eventsbaseUrl, ec);
app.get(eventsbaseUrl, ec);
app.put(eventsbaseUrl, ec);
app.delete(eventsbaseUrl,ec );


const port= 3005;

app.listen( port,  () => 
 { console.log(`Server listening on port ${port}`) }
)