import client from './database.js';
import { isAlphanumerical } from 'is-alphanumerical';
import fs from 'fs';

// Getters

const getFlightViaFlightId = (flight_id) =>{
    return new Promise(function (resolve, reject) {
		if (isAlphanumerical(flight_id)) {
            var sqlQuery = `SELECT * FROM flight WHERE flight_id='${flight_id}';`;
            client.query(sqlQuery, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    appendSqlFile(sqlQuery,'query.sql');
                    resolve(results.rows);
                }
            });
        } else{
            reject(`flight_id is not alphanumerical:\n\r${flight_id}`);
        }
    });
}

const getCrewViaFlightId = (flight_id) =>{
    return new Promise(function (resolve, reject) {
		if (isAlphanumerical(flight_id)) {
            var sqlQuery = `SELECT * FROM crew WHERE flight_id='${flight_id}';`;
            client.query(sqlQuery, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    appendSqlFile(sqlQuery,'query.sql');
                    resolve(results.rows);
                }
            });
        } else{
            reject(`flight_id is not alphanumerical:\n\r${flight_id}`);
        }
    });
}

const getPassengersViaFlightId = (flight_id) =>{
    return new Promise(function (resolve, reject) {
		if (isAlphanumerical(flight_id)) {
            var sqlQuery = `SELECT * FROM passengers WHERE flight_id='${flight_id}';`;
            client.query(sqlQuery, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    appendSqlFile(sqlQuery,'query.sql');
                    resolve(results.rows);
                }
            });
        } else{
            reject(`flight_id is not alphanumerical:\n\r${flight_id}`);
        }
    });
}

const getMaintenanceViaFlightId = (flight_id) =>{
    return new Promise(function (resolve, reject) {
		if (isAlphanumerical(flight_id)) {
            var sqlQuery = `SELECT * FROM maintenance WHERE flight_id='${flight_id}';`;
            client.query(sqlQuery, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    appendSqlFile(sqlQuery,'query.sql');
                    resolve(results.rows);
                }
            });
        } else{
            reject(`flight_id is not alphanumerical:\n\r${flight_id}`);
        }
    });
}

const getServicesViaFlightId = (flight_id) =>{
    return new Promise(function (resolve, reject) {
		if (isAlphanumerical(flight_id)) {
            var sqlQuery = `SELECT * FROM services WHERE flight_id='${flight_id}';`;
            client.query(sqlQuery, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    appendSqlFile(sqlQuery,'query.sql');
                    resolve(results.rows);
                }
            });
        } else{
            reject(`flight_id is not alphanumerical:\n\r${flight_id}`);
        }
    });
}


const getCrewBaggageViaCrewId = (crew_id) =>{
    return new Promise(function (resolve, reject) {
		if (isAlphanumerical(crew_id)) {
            var sqlQuery = `SELECT * FROM crew_baggage WHERE crew_id='${crew_id}';`
            client.query(sqlQuery, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    appendSqlFile(sqlQuery,'query.sql');
                    resolve(results.rows);
                }
            });
        } else{
            reject(`crew_id is not alphanumerical:\n\r${crew_id}`);
        }
    });
}

const getPassengerBaggageViaPassengerId = (passenger_id) =>{
    return new Promise(function (resolve, reject) {
		if (isAlphanumerical(passenger_id)) {
            var sqlQuery = `SELECT * FROM passenger_baggage WHERE passenger_id='${passenger_id}';`;
            client.query(sqlQuery, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    appendSqlFile(sqlQuery,'query.sql');
                    resolve(results.rows);
                }
            });
        } else{
            reject(`passenger_id is not alphanumerical:\n\r${passenger_id}`);
        }
    });
}

const appendSqlFile = (sqlLine,sqlFileName) =>{
    fs.appendFile(`${sqlFileName}`, sqlLine + `\n`, function(err){
        if(err) throw err;
    })
}

export default {
	getFlightViaFlightId,
    getCrewViaFlightId,
    getPassengersViaFlightId,
    getMaintenanceViaFlightId,
    getServicesViaFlightId,
    getCrewBaggageViaCrewId,
    getPassengerBaggageViaPassengerId
}
