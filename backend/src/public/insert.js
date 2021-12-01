const backendURL='http://localhost:8121'
const getBtn = document.getElementById('insert-btn');
const table = document.getElementById('table');

const sendInsert = () => {

};

const loadFields = () =>{
    var temp = table.value;
    console.log(temp)
    if(temp == 'flight'){
        console.log(temp);
    }
    if(temp == 'passengers'){
        console.log(temp);
    }
}





table.addEventListener('change',loadFields())
getBtn.addEventListener('click', sendInsert);

