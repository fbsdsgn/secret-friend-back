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

  const newArray = [];

  let rand = Math.floor(Math.random() * friends.length);
  let count = 1;
  newArray.push(friends[rand]);

  while (count < friends.length) {
    const newRand = Math.floor(Math.random() * friends.length);
    if (!newArray.includes(friends[newRand])) {
      count++;
      rand = newRand;
      newArray.push(friends[rand]);
    }
  }

  newArray.map(
    ({ dataValues }, index) => {
      let name;
      if (typeof newArray[index + 1] !== "undefined") {
        name = newArray[index + 1].dataValues.name;
      } else {
        name = newArray[0].dataValues.name;
      }
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
