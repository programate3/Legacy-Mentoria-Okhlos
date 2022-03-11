const QuestionBank = require('../db/models/QuestionBank')
const AnswerReport = require('../db/models/AnswerBank')
const SessionReport = require('../db/models/SessionReport')

// constant for the get method that fetches questions from the question bank
const SessionReportRouter = require('express').Router()

// constant for the post method that brings up responses from the response bank
// const AnswerFormRouter = require('express').Router()

const FilledOutSessRep = require('express').Router()

const SessRepRouterPost = require('express').Router()

// const AnswerInformRouter = require('express').Router()

// get method to fetch questions from the question bank
SessionReportRouter.get('/:id', async (request, response) => {
  try {
    const SessionReport = await QuestionBank.find(
      { idSession: request.params.id, receiver: false },
      { question: 1, respType: 1, option: 1, vote: 1 }
    )

    response.json(SessionReport)
  } catch (err) {
    return response.status(500).json({ msg: err.message })
  }
})

// post method to fetch load responses from response bank
// AnswerInformRouter.get('/:idSession/:id', async (req, res) => {
//   try {
//     const answerInformStudent = await AnswerReport.find({idSession: req.params.idSession, idUser: req.params.id}).populate('idQuestion',{
//       question: 1
//     })

//     res.json(answerInformStudent)
//   } catch (err) {
//     return res.status(500).json({ msg: err.message })
//   }
// })

FilledOutSessRep.get('/:id/:idSession', async (req, res) => {
  try{
    const fillesOutSession = await SessionReport.find({ idUser: req.params.id, idSession: req.params.idSession})

    res.json(fillesOutSession)
  }catch (err) {
    return res.status(500).json({ msg: err.message })
  }
})

SessRepRouterPost.post('/', async (req, res)=>{
  const sessionReport = new SessionReport({
    idSession: req.body.idSession,
    idUser: req.body.idUser,
    filledOut: req.body.filledOut
  });

  await sessionReport.save(function (err, sessionReport) {
    if (err) return res.status(500).send(err.message);
    res.status(200).json(sessionReport);
  });
})

//6197ce26f88d38494783ab98

//619b119ab7d52e9ae48a916e

module.exports = {
  SessionReportRouter,
  FilledOutSessRep,
  SessRepRouterPost
}
