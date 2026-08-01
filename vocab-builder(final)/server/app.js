const express = require('express')
const app = express()

//Cloud use only
// const cors = require('cors')
// var corsOptions = {
//   origin: 'http://localhost:8080',
//   optionSuccessStatus: 200,
// };
// app.use(cors(corsOptions))

//declare express json & urlencoded (to help server receive input from client)
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//declare CORS (for client can receive API from server)
//without CORS, client can not access API from server
//IMPORTANT
const cors = require('cors')
app.use(cors())

//declare mongoose and connect to database
const mongoose = require('mongoose')  //require === import
const local_db = "mongodb://localhost:27017/vocab-builder" //vocab-builder: database name

//declare route (router)
const vocabRoute = require('./api/routes/vocabRoute')
vocabRoute(app)

mongoose.connect(local_db)
  .then(() => console.log("DB connect succeed !"))
  .catch((err) => console.error("DB connect failed !" + err))


//run web server (by listening port)
const port = 3000 //default for node/express
app.listen(port, () => {
  //console log message only displays in developer terminal => user can not see it
  // console.log('Backend server has started on port ' + port')
  console.log(`Backend server has started on port ${port}`)
})