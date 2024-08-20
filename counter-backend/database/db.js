const mysql = require("mysql2");
const dotenv =  require("dotenv");
dotenv.config();


// const db = mysql.createConnection({
//     host: process.env.HOST,
//     database: process.env.DATABASE,
//     user: process.env.USER,
//     password: process.env.PASSWORD
// });

// db.connect(error => {
//     if(error) throw error;
//     console.log("Database connected");
// });




const pool = mysql
  .createPool({
    host: process.env.HOST,
    database: process.env.DATABASE,
    user: process.env.USER,
    password: process.env.PASSWORD,
  })

  pool.getConnection((err)=>{
    if(err){
      throw err;
  
    }
    else{
      console.log("db connected.")
    }
  })

  module.exports = pool;
  