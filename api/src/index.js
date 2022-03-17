require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const allRoutes = require('./routes/index')

// DB Collections
// const AnswerBank = require('./db/models/AnswerBank')
// const AssignedSession = require('./db/models/AssignedSession')
// const Capsules = require('./db/models/Capsules')
// const FormSession = require('./db/models/FormSession')
const MentorAvailability = require('./db/models/MentorAvailability')
// const Profile = require('./db/models/Profile')
// const QuestionBank = require('./db/models/QuestionBank')
// const Session = require('./db/models/Session')
// const SessionReport = require('./db/models/SessionReport')
// const User = require('./db/models/User')

// Conection MongoDB
require('./db/mongo')

// Init Express
const app = express()

// Middleware
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
app.use(express.static('../client/build'))
app.use(allRoutes)

app.get('/', async (req, res) => {
  try {
    const resul = await MentorAvailability.find()
    res.json(resul)
  } catch (err) {
    res.status(500).send(err)
  }
})

// Setting
const port = process.env.PORT || 'fathomless-bastion-33135.herokuapp.com'
// defines a port and passes the value to it
app.set('port', port)

// Init Server
app.listen(app.get('port'), error => {
  if (error) {
    console.error('Server failed to start')
  } else {
    console.log('Server started on port:' + port)
  }
})

module.exports = app
