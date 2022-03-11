const MentorAvailability = require('../db/models/MentorAvailability')

// A variable is created to define the controller of the Capsules path
const menAvailRouter = require('express').Router()

menAvailRouter.get('/:idSession/:idUser', async (request, response) => {
  const sessionId = request.params.idSession
  console.log("id de la sesion")
  console.log(sessionId)
  const idUser = request.params.idUser
  const availability = await MentorAvailability.find({ idStudent: idUser, idSession: sessionId })
  .populate('idSession', {
    
    state: 1,
    startDate: 1,
    endDate: 1
  })
  response.json(availability)
})

module.exports = menAvailRouter
