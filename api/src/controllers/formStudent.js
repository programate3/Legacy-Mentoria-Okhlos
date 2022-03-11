const FormStudent = require('../db/models/QuestionBank')
const AnswerForm = require('../db/models/AnswerBank')
const FormSession = require('../db/models/FormSession')


// constant for the get method that fetches questions from the question bank
const FormStudentRouter = require('express').Router()

// constant for the post method that brings up responses from the response bank
const AnswerFormRouter = require('express').Router()

const FormSessionRouter = require('express').Router()

const FormSessionRouterPost = require('express').Router()

// get method to fetch questions from the question bank
FormStudentRouter.get('/:id', async (request, response) => {
  try {
    const formStudent = await FormStudent.find(
      { idSession: request.params.id, receiver: true },
      { question: 1, respType: 1, option: 1, vote: 1, idUser: 1 }
    ).populate('idUser', { program: 1, cohorte: 1 })

    response.json(formStudent)
  } catch (err) {
    return response.status(500).json({ msg: err.message })
  }
})

// post method to fetch load responses from response bank
AnswerFormRouter.get('/:idSession/:id', async(req, res) => {
  try {
    const answerFormStudent = await AnswerForm.find({idSession: req.params.idSession, idUser: req.params.id}).populate('idQuestion',{
      question: 1,
      receiver: 1
    })

    res.json(answerFormStudent)
  } catch (err) {
    return res.status(500).json({ msg: err.message })
  }
})

FormSessionRouter.get('/:id/:idSession', async (req, res) => {
  try {
    const formSessionStudent = await FormSession.find({idStudent: req.params.id, idSession: req.params.idSession})

    res.json(formSessionStudent)
  } catch (err) {
    return response.status(500).json({ msg: err.message })
  }
})

FormSessionRouterPost.post('/' , async (req, res) => {
  const formSession = new FormSession({
    idSession: req.body.idSession,
    idStudent: req.body.idStudent,
    FilledOut: req.body.FilledOut
  });

  await formSession.save(function (err, formSession) {
    if (err) return res.status(500).send(err.message);
    res.status(200).json(formSession);
  });
})


module.exports = {
  AnswerFormRouter,
  FormStudentRouter,
  FormSessionRouter,
  FormSessionRouterPost
}
