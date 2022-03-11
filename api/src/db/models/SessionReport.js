const { Schema, model } = require('mongoose')

// required models
const Session = require('../models/Session')
const User = require('../models/User')


// schema creation for session report
const sessionReportSchema = new Schema({
  // the idSession key store the id of the model session
  idSession: { type: Schema.ObjectId, ref: Session },
  // the idStudent key store the id of the model User
  idUser: { type: Schema.ObjectId, ref: User },
  // The filledOut key stores if the form was filled out
  filledOut: Boolean
})

// fixes in sessionReportSchema
sessionReportSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})

// compilation of session report model
const SessionReport = model('SessionReport', sessionReportSchema)

module.exports = SessionReport
