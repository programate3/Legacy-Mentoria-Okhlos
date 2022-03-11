const nodemailer = require('nodemailer')
// const hbs = require('nodemailer-express-handlebars')

const { EMAIL_USERNAME, EMAIL_PASSWORD } = process.env

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    // user: 'info@educamas.com.co',
    // pass: 'zmeyndrrljkwhunn'
    user: EMAIL_USERNAME,
    pass: EMAIL_PASSWORD
  },
  tls: {
    rejectUnauthorized: false
  }
})

// transporter.use('compile', hbs({
//   viewEngine: 'express-handlebars',
//   viewPath: '../template/'
// }))

transporter.verify().then(() => {
  console.log('Ready for send emails')
})

module.exports = transporter
