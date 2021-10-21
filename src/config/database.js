const Sequelize = require('sequelize')

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite"
})

try {
  const conn = sequelize.sync({ alter: true })
} catch (err) {
  console.log(err)
}

module.exports = sequelize