const notifMentorRouter = require('express').Router()
const transporter = require('../config/mailer')
const hbs = require('nodemailer-express-handlebars')
const profile = require('../db/models/Profile')

transporter.use(
  'compile',
  hbs({
    viewEngine: 'express-handlebars',
    viewPath: './src/views/template/'
  })
)

notifMentorRouter.put('/:id', async (req, res) => {
  try {
    const user = await profile.findById(req.params.id).populate('user_id', {
      email: 1, name: 1, lastName: 1
    })
    const email = user.user_id.email
    console.log(email)

    const contentHTML = `
      <div style="max-width: 700px; margin:auto; border: 10px solid #ddd; padding: 50px 20px; font-size: 16px">
        <h1 style="text-align: center; text-transform: uppercase; color: #ffcc02" >Hola ${user.user_id.name} ${user.user_id.lastName}</h1>
        <p>Nos complace anunciarle que se le asignó a ${user.assignedMentor} como su mentor</p>  
        <a href="https://www.educamas.com.co/escuelaprogramate/" target="blank" style="text-decoration: none;background: crimson; color: white; padding: 10px 20px" >Para más información </a>  
      </div>
      `

    const info = await transporter.sendMail({
      from: '"Confirmación de Mentoria" <info@educamas.com.co>',
      to: email,
      subject: 'Asignación de Mentoria',
      html: contentHTML
      // template: 'Email-Mentor'
    })

    console.log('Messages sent', info)
  } catch (error) {
    console.error(error)
  }

  res.send('Email send')
})

module.exports = notifMentorRouter
