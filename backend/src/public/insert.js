const backendURL='http://localhost:8121'
const getBtn = document.getElementById('insert-btn');
const table = document.getElementById('table');

const sendInsert = () => {
    var temp = table.value;
    const output_message = document.querySelector('#output-message');
    output_message.innerHTML = '';

    if(temp == 'flight'){
        var flight_id = document.querySelector('#input_flight_id').value;
        var airplane = document.querySelector('#input_airplane').value;
        var takeoff_time = document.querySelector('#input_takeoff_time').value;
        var landing_time = document.querySelector('#input_landing_time').value;
        var gate = document.querySelector('#input_gate').value;
        
        createNewFlight(flight_id, airplane, takeoff_time, landing_time, gate);
        output_message.innerHTML += 'Successfully added flight';
    } else if(temp == 'passengers'){
        var flight_id = document.querySelector('#input_flight_id').value;
        var passenger_id = document.querySelector('#input_passenger_id').value;
        var passenger_name = document.querySelector('#input_passenger_name').value;
        var check_in_time = document.querySelector('#input_check_in_time').value;
        
        createNewPassenger(flight_id, passenger_id, passenger_name, check_in_time);
        output_message.innerHTML += 'Successfully added passenger';
    } else if(temp == 'crew'){
        var flight_id = document.querySelector('#input_flight_id').value;
        var crew_id = document.querySelector('#input_crew_id').value;
        var crew_name = document.querySelector('#input_crew_name').value;
        var check_in_time = document.querySelector('#input_check_in_time').value;
        
        createNewCrew(flight_id,crew_id,crew_name,check_in_time);
        output_message.innerHTML += 'Successfully added crew';
    } else if(temp == 'maintenance'){
        var flight_id = document.querySelector('#input_flight_id').value;
        var fuel_status = document.querySelector('#input_fuel_status').value;
        var clean_status = document.querySelector('#input_clean_status').value;
        var maintenance_status = document.querySelector('#input_maintenance_status').value;
        
        createNewMaintenance(flight_id,fuel_status,clean_status,maintenance_status);
        output_message.innerHTML += 'Successfully added maintenance';
    } else if(temp == 'services'){
        var flight_id = document.querySelector('#input_flight_id').value;
        var movie = document.querySelector('#input_movie').value;
        var wifi = document.querySelector('#input_wifi').value;
        var food = document.querySelector('#input_food').value;
        var beverage = document.querySelector('#input_beverage').value;
        var status = document.querySelector('#input_status').value;
        
        createNewService(flight_id,movie,wifi,food,beverage,status);
        output_message.innerHTML += 'Successfully added service';
    } else if(temp == 'crew_baggage'){
        var crew_id = document.querySelector('#input_crew_id').value;
        var check_in_time = document.querySelector('#input_check_in_time').value;
        var num_of_baggage = document.querySelector('#input_num_of_baggage').value;
        
        createNewCrewBaggage(crew_id,check_in_time,num_of_baggage);
        output_message.innerHTML += 'Successfully added crew baggage';
    } else if(temp == 'passenger_baggage'){
        var passenger_id = document.querySelector('#input_passenger_id').value;
        var check_in_time = document.querySelector('#input_check_in_time').value;
        var num_of_baggage = document.querySelector('#input_num_of_baggage').value;
        
        createNewPassengerBaggage(passenger_id,check_in_time,num_of_baggage);
        output_message.innerHTML += 'Successfully added passenger baggage';
    }
};

const loadFields = () =>{
    const fields = document.querySelector('#text-fields');
    fields.innerHTML = '';

    var temp = table.value;

    if(temp == 'flight'){
        fields.innerHTML += '<input type="text" id="input_flight_id" placeholder="flight_id">\n'
        fields.innerHTML += '<input type="text" id="input_airplane" placeholder="airplane">\n'
        fields.innerHTML += '<input type="text" id="input_takeoff_time" placeholder="takeoff_time">\n'
        fields.innerHTML += '<input type="text" id="input_landing_time" placeholder="landing_time">\n'
        fields.innerHTML += '<input type="text" id="input_gate" placeholder="gate">\n'
    }
    else if(temp == 'passengers'){
        fields.innerHTML += '<input type="text" id="input_flight_id" placeholder="flight_id">\n'
        fields.innerHTML += '<input type="text" id="input_passenger_id" placeholder="passenger_id">\n'
        fields.innerHTML += '<input type="text" id="input_passenger_name" placeholder="passenger_name">\n'
        fields.innerHTML += '<input type="text" id="input_check_in_time" placeholder="check_in_time">\n'
    }
    else if(temp == 'crew'){
        fields.innerHTML += '<input type="text" id="input_flight_id" placeholder="flight_id">\n'
        fields.innerHTML += '<input type="text" id="input_crew_id" placeholder="crew_id">\n'
        fields.innerHTML += '<input type="text" id="input_crew_name" placeholder="crew_name">\n'
        fields.innerHTML += '<input type="text" id="input_check_in_time" placeholder="check_in_time">\n'
    }
    else if(temp == 'maintenance'){
        fields.innerHTML += '<input type="text" id="input_flight_id" placeholder="flight_id">\n'
        fields.innerHTML += '<input type="text" id="input_fuel_status" placeholder="fuel_status">\n'
        fields.innerHTML += '<input type="text" id="input_clean_status" placeholder="clean_status">\n'
        fields.innerHTML += '<input type="text" id="input_maintenance_status" placeholder="maintenance_status">\n'
    }
    else if(temp == 'services'){
        fields.innerHTML += '<input type="text" id="input_flight_id" placeholder="flight_id">\n'
        fields.innerHTML += '<input type="text" id="input_movie" placeholder="movie">\n'
        fields.innerHTML += '<input type="text" id="input_wifi" placeholder="wifi">\n'
        fields.innerHTML += '<input type="text" id="input_food" placeholder="food">\n'
        fields.innerHTML += '<input type="text" id="input_beverage" placeholder="beverage">\n'
        fields.innerHTML += '<input type="text" id="input_status" placeholder="status">\n'
    }
    else if(temp == 'crew_baggage'){
        fields.innerHTML += '<input type="text" id="input_crew_id" placeholder="crew_id">\n'
        fields.innerHTML += '<input type="text" id="input_check_in_time" placeholder="check_in_time">\n'
        fields.innerHTML += '<input type="text" id="input_num_of_baggage" placeholder="num_of_baggage">\n'
    }
    else if(temp == 'passenger_baggage'){
        fields.innerHTML += '<input type="text" id="input_passenger_id" placeholder="passenger_id">\n'
        fields.innerHTML += '<input type="text" id="input_check_in_time" placeholder="check_in_time">\n'
        fields.innerHTML += '<input type="text" id="input_num_of_baggage" placeholder="num_of_baggage">\n'
    }
}





//table.addEventListener('change',loadFields())
getBtn.addEventListener('click', sendInsert);


const createNewFlight = (flight_id, airplane, takeoff_time,landing_time,gate) =>{
    return axios.post(`${backendURL}/post`, {
        flight_id: flight_id,
        airplane: airplane,
        takeoff_time: takeoff_time,
        landing_time: landing_time,
        gate: gate
    });
  }
  
  const createNewCrew = (flight_id, crew_id, crew_name,check_in_time) =>{
      axios.post(`${backendURL}/post`, {
          flight_id: flight_id,
          crew_id: crew_id,
          crew_name: crew_name,
          check_in_time: check_in_time
      });
  }
  
  const createNewPassenger = (flight_id, passenger_id, passenger_name,check_in_time) =>{
      axios.post(`${backendURL}/post`, {
          flight_id: flight_id,
          passenger_id: passenger_id,
          passenger_name: passenger_name,
          check_in_time: check_in_time
      });
  }
  
  const createNewMaintenance = (flight_id, fuel_status, clean_status,maintenance_status) =>{
      axios.post(`${backendURL}/post`, {
          flight_id: flight_id,
          fuel_status: fuel_status,
          clean_status: clean_status,
          maintenance_status: maintenance_status
      });
  }
  
  const createNewService = (flight_id, movie, wifi,food,beverage,status) =>{
      axios.post(`${backendURL}/post`, {
          flight_id: flight_id,
          movie: movie,
          wifi: wifi,
          food: food,
          beverage: beverage,
          status: status
      });
  }
  
  const createNewCrewBaggage = (crew_id, check_in_time, num_of_baggage) =>{
      axios.post(`${backendURL}/post`, {
          crew_id: crew_id,
          check_in_time: check_in_time,
          num_of_baggage: num_of_baggage
      });
  }
  
  const createNewPassengerBaggage = (passenger_id, check_in_time, num_of_baggage) =>{
      axios.post(`${backendURL}/post`, {
          passenger_id: passenger_id,
          check_in_time: check_in_time,
          num_of_baggage: num_of_baggage
      });
  }
