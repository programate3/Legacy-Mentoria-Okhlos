const assignedDateRouter = require('express').Router()
const Assignedsession = require('../db/models/AssignedSession')

// update the dateAsinada document of the session Assigned collection
assignedDateRouter.post('/', async (req, res) => {
  const AssignedDate = {
    idSession: req.body.idSession,
    idStudent: req.body.idStudent,
    idMentor: req.body.idMentor,
    dateAsig: req.body.dateAsig,
    link: req.body.link
  }

  await Assignedsession.create({
    idSession: AssignedDate.idSession,
    idStudent: AssignedDate.idStudent,
    idMentor: AssignedDate.idMentor,
    dateAsig: AssignedDate.dateAsig,
    link: AssignedDate.link
  })
  res.json('se agendo la sesion')
})

// method put link session of the session Assigned collection
// assignedDateRouter.put('/:id', async (req, res) => {
//   try {
//     const linkAsig = await session.findById(req.params.id)
//     Object.assign(linkAsig, req.body)
//     linkAsig.save()
//     res.send({ data: linkAsig })
//   } catch {
//     res.status(404).send({ error: 'link not found' })
//   }
// })

module.exports = assignedDateRouter
