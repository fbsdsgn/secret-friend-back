const Friend = require('../../models/friends')
const nodemailer = require('nodemailer');
const CONFIG_SMTP = require('../../config/smtp')

module.exports.send = async (req, res) => {
  const friends = await Friend.findAll();

  const randomFriends = await Math.floor(Math.random() * (friends.length - 0 + 1)) + 0;

  const name = friends[randomFriends].dataValues.name

  var transport = nodemailer.createTransport({
    host: CONFIG_SMTP.host,
    port: CONFIG_SMTP.port,
    auth: {
      user: CONFIG_SMTP.user,
      pass: CONFIG_SMTP.pass
    }
  })

  let message = await transport.sendMail({
    from: `"Pessoa teste <pessoa@teste.com>`,
    to: "teste@teste.com",
    subject: "Email com Nodemailer",
    text: "Este um email de teste",
    html: `<p>Seu amigo secreto é ${name}</p>`
  })
  res.send(name)
}