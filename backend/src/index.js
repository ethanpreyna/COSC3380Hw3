import express, { Router } from 'express';
import client from './database.js';
import http from 'http';
import fs from 'fs';
import cors from 'cors';

const app = express();
const port = 5432 | 3001;

import getters from './getters.js';
import posters from './posters.js';
import path from 'path';
import dirname from 'path';


const __dirname = path.resolve();

app.use(express.json())
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Contconnecrol-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
  //res.writeHead(200, {'Content-Type': 'text/html'});
  //var myReadSteam = fs.createReadStream(__dirname + '/index.html', 'utf8');
  //myReadSteam.pipe(res);

});

app.use(express.static('public'));
app.use(cors());
app.use(express.json());      //req.body
/*app.use((req, res, next) => {
    res.status(404).json({ message: "Route not found" });
  })*/

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get('/search', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/search.html'));
});

app.get('/insert', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/insert.html'));
});

app.get('/update', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/update.html'));
});


client.connect();

app.get('/get', (req, res) =>{
    if(req.query.flight_id != undefined &&
        req.query.table == "flight"){
        getters.getFlightViaFlightId(req.query.flight_id)
            .then(response => {
                res.status(200).send(response);
            })
            .catch(error => {
                res.status(500).send(error);
            });
    } else if(req.query.flight_id != undefined &&
        req.query.table == "crew"){
        getters.getCrewViaFlightId(req.query.flight_id)
            .then(response => {
                res.status(200).send(response);
            })
            .catch(error => {
                res.status(500).send(error);
            });
    } else if(req.query.flight_id != undefined &&
        req.query.table == "passengers"){
        getters.getPassengersViaFlightId(req.query.flight_id)
            .then(response => {
                res.status(200).send(response);
            })
            .catch(error => {
                res.status(500).send(error);
            });
    } else if(req.query.flight_id != undefined &&
        req.query.table == "maintenance"){
        getters.getMaintenanceViaFlightId(req.query.flight_id)
            .then(response => {
                res.status(200).send(response);
            })
            .catch(error => {
                res.status(500).send(error);
            });
    } else if(req.query.flight_id != undefined &&
        req.query.table == "services"){
        getters.getServicesViaFlightId(req.query.flight_id)
            .then(response => {
                res.status(200).send(response);
            })
            .catch(error => {
                res.status(500).send(error);
            });
    } else if(req.query.crew_id != undefined){
        getters.getCrewBaggageViaCrewId(req.query.crew_id)
            .then(response => {
                res.status(200).send(response);
            })
            .catch(error => {
                res.status(500).send(error);
            });
    } else if(req.query.passenger_id != undefined){
        getters.getPassengerBaggageViaPassengerId(req.query.passenger_id)
            .then(response => {
                res.status(200).send(response);
            })
            .catch(error => {
                res.status(500).send(error);
            });
    }
})


app.post('/post',(req,res) =>{ // receives axios post requests to input account data into the db
	if(req.body.flight_id != undefined &&
		req.body.airplane != undefined &&
		req.body.takeoff_time != undefined &&
		req.body.landing_time != undefined &&
        req.body.gate != undefined){
            posters.createNewFlight(req.body.flight_id, req.body.airplane, req.body.takeoff_time, req.body.landing_time,req.body.gate);

	}
	else if(req.body.flight_id != undefined &&
		req.body.crew_id != undefined &&
		req.body.crew_name != undefined &&
		req.body.check_in_time != undefined){
			posters.createNewCrew(req.body.flight_id, req.body.crew_id, req.body.crew_name, req.body.check_in_time);
	}
	else if(req.body.flight_id != undefined &&
		req.body.passenger_id != undefined &&
		req.body.passenger_name != undefined &&
		req.body.check_in_time != undefined){
			posters.createNewPassenger(req.body.flight_id, req.body.passenger_id, req.body.passenger_name, req.body.check_in_time);
	}
	else if(req.body.flight_id != undefined &&
		req.body.fuel_status != undefined &&
		req.body.clean_status != undefined &&
		req.body.maintenance_status != undefined){
			posters.createNewMaintenance(req.body.flight_id, req.body.fuel_status, req.body.clean_status, req.body.maintenance_status);
	}
	else if(req.body.flight_id != undefined &&
		req.body.movie != undefined &&
		req.body.wifi != undefined &&
		req.body.food != undefined &&
		req.body.beverage != undefined &&
		req.body.status != undefined){
			posters.createNewService(req.body.flight_id, req.body.movie, req.body.wifi, req.body.food, req.body.beverage, req.body.status);
	}
	else if(req.body.crew_id != undefined &&
		req.body.check_in_time != undefined &&
		req.body.num_of_baggage != undefined){
			posters.createNewCrewBaggage(req.body.crew_id, req.body.check_in_time, req.body.num_of_baggage);
	}
	else if(req.body.passenger_id != undefined &&
		req.body.check_in_time != undefined &&
		req.body.num_of_baggage != undefined){
			posters.createNewPassengerBaggage(req.body.passenger_id, req.body.check_in_time, req.body.num_of_baggage);
	}
});

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })