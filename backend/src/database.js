import pg from 'pg';

var conString = "postgres://uwkyucpp:1tgWeOPuTXwv9Od0OtHUAl7c-mMRSQKT@kashin.db.elephantsql.com/uwkyucpp"

const client = new pg.Client({
    host: "3380db.cs.uh.edu",
    user: "dbs057",
    password: "dbs057",
    port: 5432,
    database: "COSC3380"
});


export default client;

/*client.connect();

client.query(`SELECT * FROM flight`, (err, res)=>{
    if(!err){
        console.log(res.rows);
    } else{
        console.log(err.message);
    }
    client.end;
});*/