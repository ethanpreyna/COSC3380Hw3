INSERT INTO flight(flight_id,airplane,takeoff_time,landing_time,gate) VALUES('30651','B720', '2022-10-22 12:22:09', '2022-10-22 16:22:09', 'B');
 INSERT INTO crew(flight_id, crew_id, crew_name, check_in_time) VALUES('30651','A245254987', 'John Dan', '2022-10-22 12:22:09');
 INSERT INTO passengers(flight_id,passenger_id,passenger_name,check_in_time) VALUES('30651','B245223987', 'John Dan', '2022-10-22 12:22:09');
 INSERT INTO maintenance(flight_id,fuel_status,clean_status,maintenance_status) VALUES('30651','Not Fueled', 'cleaned', 'complete');
 INSERT INTO services(flight_id,movie,wifi,food,beverage,status) VALUES('30651',true, false, 'peanuts', 'coke','stocked');
 INSERT INTO crew_baggage(crew_id,check_in_time,num_of_baggage) VALUES('A139215487','2022-10-22 12:22:09', '2');
 INSERT INTO passengers(flight_id,passenger_id,passenger_name,check_in_time) VALUES('30651','B245223980', 'John Dan', '2022-10-22 12:22:09');
 INSERT INTO passenger_baggage(passenger_id,check_in_time,num_of_baggage) VALUES('B245223980','2022-10-22 12:22:09', '1');