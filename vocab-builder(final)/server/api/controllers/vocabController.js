//link to Model
const vocabModel = require('../models/vocabModel')

//define business logic of API

const createVocab = async (req, res) => {
  try {
    const newVocab = req.body
    await vocabModel.create(newVocab)
    // res.send(newVocab) Method-1
    res.json({ message: "Add new vocab succeed !" }) //Method-2
  } catch (err) {
    res.send(err)
  }
}

const viewAllVocabs = async (req, res) => { //async: server waits for the DB, then sends the data
  try {
    const vocabs = await vocabModel.find({}) // Pauses until data is fetched
    res.status(200).send(vocabs)
  } catch (err) {
    res.send(err)
  }
}

const viewVocabById = async (req, res) => {
  try {
    const id = req.params.id
    const vocabs = await vocabModel.findById(id)
    res.send(vocabs)
  } catch (err) {
    res.send(err)
  }
}

const updateVocabById = async (req, res) => {
  try {
    const id = req.params.id
    const updateVocab = req.body
    await vocabModel.findByIdAndUpdate(id, updateVocab)
    res.json({ message: "Update vocab succeed !" })
  } catch (err) {
    res.send(err)
  }
}

const deleteAllVocabs = async (req, res) => {
  try {
    await vocabModel.deleteMany()
    res.json({ message: "Delete all vocab succeed !" })
  } catch (err) {
    res.send(err)
  }
}

const deleteVocabById = async (req, res) => {
  try {
    const id = req.params.id
    await vocabModel.findByIdAndDelete(id)
    res.json({ message: "Delete vocab succeed !" })
  } catch (err) {
    res.send(err)
  }
}

//never forget to export modules at last
module.exports = {
  createVocab, viewAllVocabs, viewVocabById,
  updateVocabById, deleteAllVocabs, deleteVocabById
}