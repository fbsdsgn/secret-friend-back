const Friend = require("../../models/friends");
const nodemailer = require("nodemailer");
const CONFIG_SMTP = require("../../config/smtp");

module.exports.send = async (req, res) => {
  const friends = await Friend.findAll();

  var transport = nodemailer.createTransport({
    host: CONFIG_SMTP.host,
    port: CONFIG_SMTP.port,
    auth: {
      user: CONFIG_SMTP.user,
      pass: CONFIG_SMTP.pass,
    },
  });

  friends.map(
    ({ dataValues }, index) => {
      index = Math.floor(Math.random() * friends.length - 0 + 0) + 0;
      const name = friends[index].dataValues.name;
      transport.sendMail({
        from: `<pessoa@teste.com>`,
        to: dataValues.email,
        subject: "Seu amigo secreto",
        text: "Este um email de teste",
        html: `<p>Seu amigo secreto é ${name}</p>`,
      });
    },
    (err) => {
      return res.send(err);
    }
  );
  return res.send({ msg: "ok" });
};
