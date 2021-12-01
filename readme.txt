How to run the program:

- Open a terminal in the folder root\backend\src
- Run these commands to install the external libraries:

npm install fs
npm install is-alphanumerical
npm install http
npm install path
npm install express
npm install axios
npm install cors

- Then run the command to start the server for the web app:

node index.js

- Type this web address into your browser:

http://localhost:8121/

- This will bring you to the home page of the web app
- Select any button at the top bar to choose an action
- Below are a list of instructions for each web app action below:

-- Select --

- Use flight_id values as the main pk to query for a value in these tables:

flight
passengers
crew
maintenance
services

- Use crew_id values as the main pk to query for a value in these tables:

crew_baggage

- Use passenger_id values as the main pk to query for a value in these tables:

passenger_baggage

- Example input:

[Flight]  30626

-- Insert --

- Select a table to insert to using the dropdown menu
- A series of inputs will appear, please follow the schemes of inputs similar to those from 