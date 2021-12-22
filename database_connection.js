//database connection configures
const {Client}= require("pg")

const db=new Client({
    host:"localhost",
    user:"postgres",
    port:5432,
    password:"1",
    database:"vehicle_management"
})

db.connect()

// db.query("select * from vehicles",(err,res)=>{
//     if(err)
//         return -1;
//     console.log(res.rows+"---->")
//     db.end()
// })