
//link to controller
const vocabController = require('../controllers/vocabController')

const vocabRoute = (app) => {
  //declare all API endpoints & methods here

  //First method: group by features (CRUD) - beginner style
  //CREATE - POST
  // app.get('/api/vocabs', vocabController.createVocab)

  // //READ - GET
  // app.get('/api/vocabs', vocabController.viewAllVocabs)
  // app.get('/api/vocabs/:id', vocabController.viewVocabById)

  // //UPDATE - PUT
  // app.get('/api/vocabs/:id', vocabController.updateVocabById)

  // //DELETE - DELETE
  // app.get('/api/vocabs', vocabController.deleteAllVocabs)
  // app.get('/api/vocabs/:id', vocabController.deleteVocabById)


  //Second method: group by endpoints (links)
  //Without parameter "id"
  app.route('/vocabs')
      .get(vocabController.viewAllVocabs)
      .post(vocabController.createVocab)
      // .delete(vocabController.deleteAllVocabs)

  //With parameter "id"
  app.route('/vocabs/:id')
      .get(vocabController.viewVocabById)
      .put(vocabController.updateVocabById)
      .delete(vocabController.deleteVocabById)

  // app.route('/vocabs/search/:word')
  //     .get(VocabController.searchWord)
}

//export route
module.exports = vocabRoute