//how many collections (tables) in database
//you create corresponding models in server
//in this project, we have only 1 table
//so we only need to code 1 model
const mongoose = require('mongoose')

//schema == table design/structure
const vocabSchema =  mongoose.Schema(
  {
  //how many column in table
  //you create corresponding fields/attributes in schema

  //read more about Mongoose Validation for schema
    english : {
      type: String,
      required: [true, "English word can not be empty"],
      minLength: 1,
      maxLength: 40
    },
    german : {
    type: String,
    required: [true, "German word can not be empty"],
    minLength: 1,
    maxLength: 40
    },
  },
  {
    versionKey: false //disable (remove) "__v" field when adding new data
  }
)

//declare model and export it
const vocabModel = mongoose.model("vocabs", vocabSchema) //vocabs : collection (table) name
module.exports = vocabModel