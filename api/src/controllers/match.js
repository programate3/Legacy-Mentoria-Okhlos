const profile = require('../db/models/Profile')
const users = require('../db/models/User')

// A variable is created to define the controllers of the user, aswen  path
const assignedRouter = require('express').Router()

// Get all info the student
assignedRouter.get('/students/:program/:cohort', async (req, res, next) => {
  const user = {
    cohorte: parseInt(req.params.cohort),
    program: req.params.program
  }
  const studentsActive = await users.find({
    state: true,
    role: 1,
    cohorte: user.cohorte,
    program: user.program
  })

  const usersNotAssigned = await profile
    .find(
      { assignedMentor: { $regex: '.*Not assigned$' } },
      {
        _id: 1,
        actualAge: 1,
        commitment: 1,
        achievementOrientation: 1,
        flexibility: 1,
        assertiveCommunication: 1,
        interestsStudent: 1,
        assignedMentor: 1
      }
    )
    .populate('user_id')

  const arrayEstudentsNotAssigned = []

  for (let e = 0; e < studentsActive.length; e++) {
    for (let i = 0; i < usersNotAssigned.length; i++) {
      if (
        studentsActive[e].email ===
        usersNotAssigned[i].user_id.email
      ) {
        arrayEstudentsNotAssigned.push(usersNotAssigned[i])
      }
    }
  }
  res.json(arrayEstudentsNotAssigned)
})

// Get all info the mentor
assignedRouter.get('/mentor/:program/:cohort', async (req, res, next) => {
  const user = {
    cohorte: parseInt(req.params.cohort),
    program: req.params.program
  }
  // console.log(user.cohorte)
  const mentorAvailable = await profile
    .find(
      {},
      {
        _id: 1,
        numeStudents: 1,
        studentAssignment: 1,
        interestsMentor: 1,
        actualAge: 1,
        commitment: 1,
        achievementOrientation: 1,
        flexibility: 1,
        assertiveCommunication: 1,
        gender: 1
      }
    )
    .populate('user_id')
  // console.log(mentorAvailable)
  const arrayMentorAvailable = []
  for (let m = 0; m < mentorAvailable.length; m++) {
    if (mentorAvailable[m].user_id.cohorte === user.cohorte &&
        mentorAvailable[m].user_id.role === 4 &&
        mentorAvailable[m].user_id.state === true &&
        mentorAvailable[m].user_id.program === user.program) {
      if (
        mentorAvailable[m].studentAssignment.length <
        mentorAvailable[m].numeStudents
      ) {
        arrayMentorAvailable.push(mentorAvailable[m])
      }
    }
  }
  res.json(arrayMentorAvailable)
})

module.exports = { assignedRouter }
