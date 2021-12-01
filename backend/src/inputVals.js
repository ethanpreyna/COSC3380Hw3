import axios from 'axios';
import { response } from 'express';

const backendURL='http://localhost:8121'

const createNewFlight = (flight_id, airplane, takeoff_time,landing_time,gate) =>{
  axios.post(`${backendURL}/post`, {
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

//createNewFlight('30651','B720','2022-10-22 12:22:09','2022-10-22 16:22:09','B');
//createNewCrew('30651', 'A245254987','John Dan','2022-10-22 12:22:09');
//createNewPassenger('30651', 'B245223980','John Dan','2022-10-22 12:22:09');
//createNewMaintenance('30651', 'Not Fueled','cleaned','complete');
//createNewService('30651', true,false,'peanuts','coke','stocked');
//createNewCrewBaggage('A139215487', '2022-10-22 12:22:09', 2);
//createNewPassengerBaggage('B245223980', '2022-10-22 12:22:09', 1);

//Fills db with random info
var flight_id = 30625
for(var i = 1; i < 80; i++){
    var indexName1 = Math.floor(Math.random() * 1000);
    var indexName2 = Math.floor(Math.random() * 1000);
    var indexName3 = Math.floor(Math.random() * 1000);
    var indexName4 = Math.floor(Math.random() * 1000);
    var idVal = Math.floor(Math.random() * 8999999999 + 1000000000);
    var index = Math.floor(Math.random() * 5);
    var tOrF1 = Math.floor(Math.random() * 2);
    var tOrF2 = Math.floor(Math.random() * 2);

    var names = [ 'Abbott',
    'Acevedo',
    'Acosta',
    'Adams',
    'Adkins',
    'Aguilar',
    'Aguirre',
    'Albert',
    'Alexander',
    'Alford',
    'Allen',
    'Allison',
    'Alston',
    'Alvarado',
    'Alvarez',
    'Anderson',
    'Andrews',
    'Anthony',
    'Armstrong',
    'Arnold',
    'Ashley',
    'Atkins',
    'Atkinson',
    'Austin',
    'Avery',
    'Avila',
    'Ayala',
    'Ayers',
    'Bailey',
    'Baird',
    'Baker',
    'Baldwin',
    'Ball',
    'Ballard',
    'Banks',
    'Barber',
    'Barker',
    'Barlow',
    'Barnes',
    'Barnett',
    'Barr',
    'Barrera',
    'Barrett',
    'Barron',
    'Barry',
    'Bartlett',
    'Barton',
    'Bass',
    'Bates',
    'Battle',
    'Bauer',
    'Baxter',
    'Beach',
    'Bean',
    'Beard',
    'Beasley',
    'Beck',
    'Becker',
    'Bell',
    'Bender',
    'Benjamin',
    'Bennett',
    'Benson',
    'Bentley',
    'Benton',
    'Berg',
    'Berger',
    'Bernard',
    'Berry',
    'Best',
    'Bird',
    'Bishop',
    'Black',
    'Blackburn',
    'Blackwell',
    'Blair',
    'Blake',
    'Blanchard',
    'Blankenship',
    'Blevins',
    'Bolton',
    'Bond',
    'Bonner',
    'Booker',
    'Boone',
    'Booth',
    'Bowen',
    'Bowers',
    'Bowman',
    'Boyd',
    'Boyer',
    'Boyle',
    'Bradford',
    'Bradley',
    'Bradshaw',
    'Brady',
    'Branch',
    'Bray',
    'Brennan',
    'Brewer',
    'Bridges',
    'Briggs',
    'Bright',
    'Britt',
    'Brock',
    'Brooks',
    'Brown',
    'Browning',
    'Bruce',
    'Bryan',
    'Bryant',
    'Buchanan',
    'Buck',
    'Buckley',
    'Buckner',
    'Bullock',
    'Burch',
    'Burgess',
    'Burke',
    'Burks',
    'Burnett',
    'Burns',
    'Burris',
    'Burt',
    'Burton',
    'Bush',
    'Butler',
    'Byers',
    'Byrd',
    'Cabrera',
    'Cain',
    'Calderon',
    'Caldwell',
    'Calhoun',
    'Callahan',
    'Camacho',
    'Cameron',
    'Campbell',
    'Campos',
    'Cannon',
    'Cantrell',
    'Cantu',
    'Cardenas',
    'Carey',
    'Carlson',
    'Carney',
    'Carpenter',
    'Carr',
    'Carrillo',
    'Carroll',
    'Carson',
    'Carter',
    'Carver',
    'Case',
    'Casey',
    'Cash',
    'Castaneda',
    'Castillo',
    'Castro',
    'Cervantes',
    'Chambers',
    'Chan',
    'Chandler',
    'Chaney',
    'Chang',
    'Chapman',
    'Charles',
    'Chase',
    'Chavez',
    'Chen',
    'Cherry',
    'Christensen',
    'Christian',
    'Church',
    'Clark',
    'Clarke',
    'Clay',
    'Clayton',
    'Clements',
    'Clemons',
    'Cleveland',
    'Cline',
    'Cobb',
    'Cochran',
    'Coffey',
    'Cohen',
    'Cole',
    'Coleman',
    'Collier',
    'Collins',
    'Colon',
    'Combs',
    'Compton',
    'Conley',
    'Conner',
    'Conrad',
    'Contreras',
    'Conway',
    'Cook',
    'Cooke',
    'Cooley',
    'Cooper',
    'Copeland',
    'Cortez',
    'Cote',
    'Cotton',
    'Cox',
    'Craft',
    'Craig',
    'Crane',
    'Crawford',
    'Crosby',
    'Cross',
    'Cruz',
    'Cummings',
    'Cunningham',
    'Curry',
    'Curtis',
    'Dale',
    'Dalton',
    'Daniel',
    'Daniels',
    'Daugherty',
    'Davenport',
    'David',
    'Davidson',
    'Davis',
    'Dawson',
    'Day',
    'Dean',
    'Decker',
    'Dejesus',
    'Delacruz',
    'Delaney',
    'Deleon',
    'Delgado',
    'Dennis',
    'Diaz',
    'Dickerson',
    'Dickson',
    'Dillard',
    'Dillon',
    'Dixon',
    'Dodson',
    'Dominguez',
    'Donaldson',
    'Donovan',
    'Dorsey',
    'Dotson',
    'Douglas',
    'Downs',
    'Doyle',
    'Drake',
    'Dudley',
    'Duffy',
    'Duke',
    'Duncan',
    'Dunlap',
    'Dunn',
    'Duran',
    'Durham',
    'Dyer',
    'Eaton',
    'Edwards',
    'Elliott',
    'Ellis',
    'Ellison',
    'Emerson',
    'England',
    'English',
    'Erickson',
    'Espinoza',
    'Estes',
    'Estrada',
    'Evans',
    'Everett',
    'Ewing',
    'Farley',
    'Farmer',
    'Farrell',
    'Faulkner',
    'Ferguson',
    'Fernandez',
    'Ferrell',
    'Fields',
    'Figueroa',
    'Finch',
    'Finley',
    'Fischer',
    'Fisher',
    'Fitzgerald',
    'Fitzpatrick',
    'Fleming',
    'Fletcher',
    'Flores',
    'Flowers',
    'Floyd',
    'Flynn',
    'Foley',
    'Forbes',
    'Ford',
    'Foreman',
    'Foster',
    'Fowler',
    'Fox',
    'Francis',
    'Franco',
    'Frank',
    'Franklin',
    'Franks',
    'Frazier',
    'Frederick',
    'Freeman',
    'French',
    'Frost',
    'Fry',
    'Frye',
    'Fuentes',
    'Fuller',
    'Fulton',
    'Gaines',
    'Gallagher',
    'Gallegos',
    'Galloway',
    'Gamble',
    'Garcia',
    'Gardner',
    'Garner',
    'Garrett',
    'Garrison',
    'Garza',
    'Gates',
    'Gay',
    'Gentry',
    'George',
    'Gibbs',
    'Gibson',
    'Gilbert',
    'Giles',
    'Gill',
    'Gillespie',
    'Gilliam',
    'Gilmore',
    'Glass',
    'Glenn',
    'Glover',
    'Goff',
    'Golden',
    'Gomez',
    'Gonzales',
    'Gonzalez',
    'Good',
    'Goodman',
    'Goodwin',
    'Gordon',
    'Gould',
    'Graham',
    'Grant',
    'Graves',
    'Gray',
    'Green',
    'Greene',
    'Greer',
    'Gregory',
    'Griffin',
    'Griffith',
    'Grimes',
    'Gross',
    'Guerra',
    'Guerrero',
    'Guthrie',
    'Gutierrez',
    'Guy',
    'Guzman',
    'Hahn',
    'Hale',
    'Haley',
    'Hall',
    'Hamilton',
    'Hammond',
    'Hampton',
    'Hancock',
    'Haney',
    'Hansen',
    'Hanson',
    'Hardin',
    'Harding',
    'Hardy',
    'Harmon',
    'Harper',
    'Harrell',
    'Harrington',
    'Harris',
    'Harrison',
    'Hart',
    'Hartman',
    'Harvey',
    'Hatfield',
    'Hawkins',
    'Hayden',
    'Hayes',
    'Haynes',
    'Hays',
    'Head',
    'Heath',
    'Hebert',
    'Henderson',
    'Hendricks',
    'Hendrix',
    'Henry',
    'Hensley',
    'Henson',
    'Herman',
    'Hernandez',
    'Herrera',
    'Herring',
    'Hess',
    'Hester',
    'Hewitt',
    'Hickman',
    'Hicks',
    'Higgins',
    'Hill',
    'Hines',
    'Hinton',
    'Hobbs',
    'Hodge',
    'Hodges',
    'Hoffman',
    'Hogan',
    'Holcomb',
    'Holden',
    'Holder',
    'Holland',
    'Holloway',
    'Holman',
    'Holmes',
    'Holt',
    'Hood',
    'Hooper',
    'Hoover',
    'Hopkins',
    'Hopper',
    'Horn',
    'Horne',
    'Horton',
    'House',
    'Houston',
    'Howard',
    'Howe',
    'Howell',
    'Hubbard',
    'Huber',
    'Hudson',
    'Huff',
    'Huffman',
    'Hughes',
    'Hull',
    'Humphrey',
    'Hunt',
    'Hunter',
    'Hurley',
    'Hurst',
    'Hutchinson',
    'Hyde',
    'Ingram',
    'Irwin',
    'Jackson',
    'Jacobs',
    'Jacobson',
    'James',
    'Jarvis',
    'Jefferson',
    'Jenkins',
    'Jennings',
    'Jensen',
    'Jimenez',
    'Johns',
    'Johnson',
    'Johnston',
    'Jones',
    'Jordan',
    'Joseph',
    'Joyce',
    'Joyner',
    'Juarez',
    'Justice',
    'Kane',
    'Kaufman',
    'Keith',
    'Keller',
    'Kelley',
    'Kelly',
    'Kemp',
    'Kennedy',
    'Kent',
    'Kerr',
    'Key',
    'Kidd',
    'Kim',
    'King',
    'Kinney',
    'Kirby',
    'Kirk',
    'Kirkland',
    'Klein',
    'Kline',
    'Knapp',
    'Knight',
    'Knowles',
    'Knox',
    'Koch',
    'Kramer',
    'Lamb',
    'Lambert',
    'Lancaster',
    'Landry',
    'Lane',
    'Lang',
    'Langley',
    'Lara',
    'Larsen',
    'Larson',
    'Lawrence',
    'Lawson',
    'Le',
    'Leach',
    'Leblanc',
    'Lee',
    'Leon',
    'Leonard',
    'Lester',
    'Levine',
    'Levy',
    'Lewis',
    'Lindsay',
    'Lindsey',
    'Little',
    'Livingston',
    'Lloyd',
    'Logan',
    'Long',
    'Lopez',
    'Lott',
    'Love',
    'Lowe',
    'Lowery',
    'Lucas',
    'Luna',
    'Lynch',
    'Lynn',
    'Lyons',
    'Macdonald',
    'Macias',
    'Mack',
    'Madden',
    'Maddox',
    'Maldonado',
    'Malone',
    'Mann',
    'Manning',
    'Marks',
    'Marquez',
    'Marsh',
    'Marshall',
    'Martin',
    'Martinez',
    'Mason',
    'Massey',
    'Mathews',
    'Mathis',
    'Matthews',
    'Maxwell',
    'May',
    'Mayer',
    'Maynard',
    'Mayo',
    'Mays',
    'Mcbride',
    'Mccall',
    'Mccarthy',
    'Mccarty',
    'Mcclain',
    'Mcclure',
    'Mcconnell',
    'Mccormick',
    'Mccoy',
    'Mccray',
    'Mccullough',
    'Mcdaniel',
    'Mcdonald',
    'Mcdowell',
    'Mcfadden',
    'Mcfarland',
    'Mcgee',
    'Mcgowan',
    'Mcguire',
    'Mcintosh',
    'Mcintyre',
    'Mckay',
    'Mckee',
    'Mckenzie',
    'Mckinney',
    'Mcknight',
    'Mclaughlin',
    'Mclean',
    'Mcleod',
    'Mcmahon',
    'Mcmillan',
    'Mcneil',
    'Mcpherson',
    'Meadows',
    'Medina',
    'Mejia',
    'Melendez',
    'Melton',
    'Mendez',
    'Mendoza',
    'Mercado',
    'Mercer',
    'Merrill',
    'Merritt',
    'Meyer',
    'Meyers',
    'Michael',
    'Middleton',
    'Miles',
    'Miller',
    'Mills',
    'Miranda',
    'Mitchell',
    'Molina',
    'Monroe',
    'Montgomery',
    'Montoya',
    'Moody',
    'Moon',
    'Mooney',
    'Moore',
    'Morales',
    'Moran',
    'Moreno',
    'Morgan',
    'Morin',
    'Morris',
    'Morrison',
    'Morrow',
    'Morse',
    'Morton',
    'Moses',
    'Mosley',
    'Moss',
    'Mueller',
    'Mullen',
    'Mullins',
    'Munoz',
    'Murphy',
    'Murray',
    'Myers',
    'Nash',
    'Navarro',
    'Neal',
    'Nelson',
    'Newman',
    'Newton',
    'Nguyen',
    'Nichols',
    'Nicholson',
    'Nielsen',
    'Nieves',
    'Nixon',
    'Noble',
    'Noel',
    'Nolan',
    'Norman',
    'Norris',
    'Norton',
    'Nunez',
    'Obrien',
    'Ochoa',
    'Oconnor',
    'Odom',
    'Odonnell',
    'Oliver',
    'Olsen',
    'Olson',
    'Oneal',
    'Oneil',
    'Oneill',
    'Orr',
    'Ortega',
    'Ortiz',
    'Osborn',
    'Osborne',
    'Owen',
    'Owens',
    'Pace',
    'Pacheco',
    'Padilla',
    'Page',
    'Palmer',
    'Park',
    'Parker',
    'Parks',
    'Parrish',
    'Parsons',
    'Pate',
    'Patel',
    'Patrick',
    'Patterson',
    'Patton',
    'Paul',
    'Payne',
    'Pearson',
    'Peck',
    'Pena',
    'Pennington',
    'Perez',
    'Perkins',
    'Perry',
    'Peters',
    'Petersen',
    'Peterson',
    'Petty',
    'Phelps',
    'Phillips',
    'Pickett',
    'Pierce',
    'Pittman',
    'Pitts',
    'Pollard',
    'Poole',
    'Pope',
    'Porter',
    'Potter',
    'Potts',
    'Powell',
    'Powers',
    'Pratt',
    'Preston',
    'Price',
    'Prince',
    'Pruitt',
    'Puckett',
    'Pugh',
    'Quinn',
    'Ramirez',
    'Ramos',
    'Ramsey',
    'Randall',
    'Randolph',
    'Rasmussen',
    'Ratliff',
    'Ray',
    'Raymond',
    'Reed',
    'Reese',
    'Reeves',
    'Reid',
    'Reilly',
    'Reyes',
    'Reynolds',
    'Rhodes',
    'Rice',
    'Rich',
    'Richard',
    'Richards',
    'Richardson',
    'Richmond',
    'Riddle',
    'Riggs',
    'Riley',
    'Rios',
    'Rivas',
    'Rivera',
    'Rivers',
    'Roach',
    'Robbins',
    'Roberson',
    'Roberts',
    'Robertson',
    'Robinson',
    'Robles',
    'Rocha',
    'Rodgers',
    'Rodriguez',
    'Rodriquez',
    'Rogers',
    'Rojas',
    'Rollins',
    'Roman',
    'Romero',
    'Rosa',
    'Rosales',
    'Rosario',
    'Rose',
    'Ross',
    'Roth',
    'Rowe',
    'Rowland',
    'Roy',
    'Ruiz',
    'Rush',
    'Russell',
    'Russo',
    'Rutledge',
    'Ryan',
    'Salas',
    'Salazar',
    'Salinas',
    'Sampson',
    'Sanchez',
    'Sanders',
    'Sandoval',
    'Sanford',
    'Santana',
    'Santiago',
    'Santos',
    'Sargent',
    'Saunders',
    'Savage',
    'Sawyer',
    'Schmidt',
    'Schneider',
    'Schroeder',
    'Schultz',
    'Schwartz',
    'Scott',
    'Sears',
    'Sellers',
    'Serrano',
    'Sexton',
    'Shaffer',
    'Shannon',
    'Sharp',
    'Sharpe',
    'Shaw',
    'Shelton',
    'Shepard',
    'Shepherd',
    'Sheppard',
    'Sherman',
    'Shields',
    'Short',
    'Silva',
    'Simmons',
    'Simon',
    'Simpson',
    'Sims',
    'Singleton',
    'Skinner',
    'Slater',
    'Sloan',
    'Small',
    'Smith',
    'Snider',
    'Snow',
    'Snyder',
    'Solis',
    'Solomon',
    'Sosa',
    'Soto',
    'Sparks',
    'Spears',
    'Spence',
    'Spencer',
    'Stafford',
    'Stanley',
    'Stanton',
    'Stark',
    'Steele',
    'Stein',
    'Stephens',
    'Stephenson',
    'Stevens',
    'Stevenson',
    'Stewart',
    'Stokes',
    'Stone',
    'Stout',
    'Strickland',
    'Strong',
    'Stuart',
    'Suarez',
    'Sullivan',
    'Summers',
    'Sutton',
    'Swanson',
    'Sweeney',
    'Sweet',
    'Sykes',
    'Talley',
    'Tanner',
    'Tate',
    'Taylor',
    'Terrell',
    'Terry',
    'Thomas',
    'Thompson',
    'Thornton',
    'Tillman',
    'Todd',
    'Torres',
    'Townsend',
    'Tran',
    'Travis',
    'Trevino',
    'Trujillo',
    'Tucker',
    'Turner',
    'Tyler',
    'Tyson',
    'Underwood',
    'Valdez',
    'Valencia',
    'Valentine',
    'Valenzuela',
    'Vance',
    'Vang',
    'Vargas',
    'Vasquez',
    'Vaughan',
    'Vaughn',
    'Vazquez',
    'Vega',
    'Velasquez',
    'Velazquez',
    'Velez',
    'Villarreal',
    'Vincent',
    'Vinson',
    'Wade',
    'Wagner',
    'Walker',
    'Wall',
    'Wallace',
    'Waller',
    'Walls',
    'Walsh',
    'Walter',
    'Walters',
    'Walton',
    'Ward',
    'Ware',
    'Warner',
    'Warren',
    'Washington',
    'Waters',
    'Watkins',
    'Watson',
    'Watts',
    'Weaver',
    'Webb',
    'Weber',
    'Webster',
    'Weeks',
    'Weiss',
    'Welch',
    'Wells',
    'West',
    'Wheeler',
    'Whitaker',
    'White',
    'Whitehead',
    'Whitfield',
    'Whitley',
    'Whitney',
    'Wiggins',
    'Wilcox',
    'Wilder',
    'Wiley',
    'Wilkerson',
    'Wilkins',
    'Wilkinson',
    'William',
    'Williams',
    'Williamson',
    'Willis',
    'Wilson',
    'Winters',
    'Wise',
    'Witt',
    'Wolf',
    'Wolfe',
    'Wong',
    'Wood',
    'Woodard',
    'Woods',
    'Woodward',
    'Wooten',
    'Workman',
    'Wright',
    'Wyatt',
    'Wynn',
    'Yang',
    'Yates',
    'York',
    'Young',
    'Zamora',
    'Zimmerman'];
    var airplanes = ['A339','B720','A342','B722','EA50'];
    var times = ['2022-10-21 14:22:09','2022-10-21 18:22:19','2022-10-22 01:33:29','2022-10-22 04:21:30','2022-10-22 21:02:55','2022-10-23 03:22:01'];
    var gates = ['A','B','C','D','E'];
    var maint1 = ['fueled', 'not fueled'];
    var maint2 = ['cleaned', 'not cleaned'];
    var maint3 = ['complete', 'incomplete'];
    var beverages = ['water','coke','sprite','pepsi','orange juice'];
    var foods = ['chicken','peanuts','fruit','ham','salad'];
    var statuses = ['stocked', 'not stocked'];
    var tOrFArr = [true, false];



    if(i%5 == 0){
        flight_id += 1;
        //console.log(flight_id, airplane, takeoff_time, landing_time, gate,"\n");
        //console.log(flight_id, fuel_status, clean_status, maintenance_status,"\n");
        //console.log(flight_id, movie, wifi, food, beverage, status,"\n");
        createNewFlight(flight_id, airplane, takeoff_time, landing_time, gate);
        createNewMaintenance(flight_id, fuel_status, clean_status, maintenance_status);
        createNewService(flight_id, movie, wifi, food, beverage, status);
    }
    
    var airplane = airplanes[index];
    var takeoff_time = times[index];
    var landing_time = times[index+1];
    var gate = gates[index];
    var passenger_name = names[indexName1] + " " + names[indexName2];
    var crew_name = names[indexName3] + " " + names[indexName4];
    var crew_id = "A" + idVal;
    var passenger_id = "B" + (idVal-4234);
    var check_in_time1 = times[index];
    var check_in_time2 = times[index+1];
    var fuel_status = maint1[tOrF1];
    var clean_status = maint2[tOrF2];
    var maintenance_status = maint3[tOrF1];
    var movie = tOrFArr[tOrF1];
    var wifi = tOrFArr[tOrF2];
    var beverage = beverages[index];
    var food = foods[index];
    var status = statuses[tOrF1];
    var num_of_baggage = index;



    //console.log("===========================================================")
    //console.log(flight_id, crew_id, crew_name, check_in_time1,"\n");
    //console.log(flight_id, passenger_id, passenger_name, check_in_time2,"\n");
    //console.log(crew_id, check_in_time1, num_of_baggage,"\n");
    //console.log(passenger_id, check_in_time2, num_of_baggage,"\n");
    createNewCrew(flight_id, crew_id, crew_name, check_in_time1);
    createNewPassenger(flight_id, passenger_id, passenger_name, check_in_time2);
    createNewCrewBaggage(crew_id, check_in_time1, num_of_baggage);
    createNewPassengerBaggage(passenger_id, check_in_time2, num_of_baggage);

}