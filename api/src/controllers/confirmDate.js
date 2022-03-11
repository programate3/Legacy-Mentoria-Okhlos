const ConfirmDate = require('../db/models/AssignedSession')
const ConfirmDateRouter = require('express').Router()

ConfirmDateRouter.post('/', async (req, res, next) => {
  const body = req.body
  const dateconfirm = new ConfirmDate(body)
  console.log(dateconfirm)
  await dateconfirm.save()
  res.send('saved')
})

module.exports = ConfirmDateRouter
