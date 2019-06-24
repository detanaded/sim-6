require('dotenv').config()
const express = require('express'),
  massive = require('massive')
// const session = require('express-session')


const app = express()

const{SERVER_PORT,CONNECTION_STRING}=process.env

app.use(express.json());

massive(CONNECTION_STRING).then(database => {
  app.set("db", database);
  console.log("Pepebase Set!");
  app.listen(SERVER_PORT, () => {
    console.log(`Pepe Memin on ${SERVER_PORT} ✌️ !`)
  })
})




