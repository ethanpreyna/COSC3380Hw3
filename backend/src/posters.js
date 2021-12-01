import client from './database.js';
import { isAlphanumerical } from 'is-alphanumerical';
import fs from 'fs';


const createNewFlight = (flight_id, airplane, takeoff_time, landing_time, gate) =>{ //Receives axios post request from index.js, connects to db and creates new timeline
		//Inputs id, guild_id, premium version state into a query to insert to the timeline table
	return new Promise(function(resolve, reject) {
		var sqlLine = `INSERT INTO flight(flight_id,airplane,takeoff_time,landing_time,gate) VALUES('${flight_id}','${airplane}', '${takeoff_time}', '${landing_time}', '${gate}');`;
		client.query(sqlLine, (error) => {
				if (error) {
					reject(error);
				} else {
					appendSqlFile(sqlLine,'transactions.sql');
					console.log("inserted flight");
					resolve('Added flight');
				}
			});
	});
}

const createNewCrew = (flight_id, crew_id, crew_name, check_in_time) =>{ //Receives axios post request from index.js, connects to db and creates new timeline
	//Inputs id, guild_id, premium version state into a query to insert to the timeline table
return new Promise(function(resolve, reject) {
	var sqlLine = ` INSERT INTO crew(flight_id, crew_id, crew_name, check_in_time) VALUES('${flight_id}','${crew_id}', '${crew_name}', '${check_in_time}');`
	client.query(sqlLine
	, (error) => {
			if (error) {
				reject(error);
			} else {
				appendSqlFile(sqlLine,'transactions.sql');
				console.log("added crew");
				resolve('Added crew');
			}
		});
});
}

const createNewMaintenance = (flight_id, fuel_status, clean_status, maintenance_status) =>{ //Receives axios post request from index.js, connects to db and creates new timeline
	//Inputs id, guild_id, premium version state into a query to insert to the timeline table
	return new Promise(function(resolve, reject) {
		var sqlLine = ` INSERT INTO maintenance(flight_id,fuel_status,clean_status,maintenance_status) VALUES('${flight_id}','${fuel_status}', '${clean_status}', '${maintenance_status}');`
		client.query(sqlLine
		, (error) => {
				if (error) {
					reject(error);
				} else {
					appendSqlFile(sqlLine,'transactions.sql');
					console.log("Added maintenance");
					resolve('Added maintenance');
				}
			});
	});
}

const createNewService = (flight_id, movie, wifi, food, beverage,status) =>{ //Receives axios post request from index.js, connects to db and creates new timeline
	//Inputs id, guild_id, premium version state into a query to insert to the timeline table
return new Promise(function(resolve, reject) {
	var sqlLine = ` INSERT INTO services(flight_id,movie,wifi,food,beverage,status) VALUES('${flight_id}',${movie}, ${wifi}, '${food}', '${beverage}','${status}');`
	client.query( sqlLine
	, (error) => {
			if (error) {
				reject(error);
			} else {
				appendSqlFile(sqlLine,'transactions.sql');
				console.log("inserted service");
				resolve('Added service');
			}
		});
});
}

const createNewPassenger = (flight_id, passenger_id, passenger_name, check_in_time) =>{ //Receives axios post request from index.js, connects to db and creates new timeline
	//Inputs id, guild_id, premium version state into a query to insert to the timeline table
	return new Promise(function(resolve, reject) {
		var sqlLine = ` INSERT INTO passengers(flight_id,passenger_id,passenger_name,check_in_time) VALUES('${flight_id}','${passenger_id}', '${passenger_name}', '${check_in_time}');`
		client.query(sqlLine
		, (error) => {
				if (error) {
					reject(error);
				} else {
                    appendSqlFile(sqlLine,'transactions.sql');
					console.log("inserted passenger");
					resolve('Added passenger');
				}
			});
	});
}

const createNewCrewBaggage = (crew_id, check_in_time, num_of_baggage) =>{ //Receives axios post request from index.js, connects to db and creates new timeline
	//Inputs id, guild_id, premium version state into a query to insert to the timeline table
	return new Promise(function(resolve, reject) {
		var sqlLine = ` INSERT INTO crew_baggage(crew_id,check_in_time,num_of_baggage) VALUES('${crew_id}','${check_in_time}', '${num_of_baggage}');`
		client.query(sqlLine
		, (error) => {
				if (error) {
					reject(error);
				} else {
                    appendSqlFile(sqlLine,'transactions.sql');
					console.log("inserted crew_baggage");
					resolve('Added crew_baggage');
				}
			});
	});
}

const createNewPassengerBaggage = (passenger_id, check_in_time, num_of_baggage) =>{ //Receives axios post request from index.js, connects to db and creates new timeline
	//Inputs id, guild_id, premium version state into a query to insert to the timeline table
	return new Promise(function(resolve, reject) {
		var sqlLine = ` INSERT INTO passenger_baggage(passenger_id,check_in_time,num_of_baggage) VALUES('${passenger_id}','${check_in_time}', '${num_of_baggage}');`;
		client.query(sqlLine
		, (error) => {
				if (error) {
					reject(error);
				} else {
                    appendSqlFile(sqlLine,'transactions.sql');
					console.log("inserted passenger_baggage");
					resolve('Added passenger_baggage');
				}
			});
	});
}

const appendSqlFile = (sqlLine,sqlFileName) =>{
    fs.appendFile(`${sqlFileName}`, sqlLine + `\n`, function(err){
        if(err) throw err;
    })
}

export default{
    createNewFlight,
	createNewPassenger,
	createNewMaintenance,
	createNewService,
	createNewCrew,
	createNewCrewBaggage,
	createNewPassengerBaggage
}