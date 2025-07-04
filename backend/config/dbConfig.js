const mongoose = require('mongoose');

mongoose.connect(process.env.CONN_STRING)

const db = mongoose.connection;
db.on('connected',()=>{
  console.log('Database connected successfully');
})
db.on('err',()=>{
    console.log('Error connecting to database')
})

module.exports = db;