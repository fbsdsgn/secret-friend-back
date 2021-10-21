const { Router } = require('express')

const router = Router()

module.exports = app => {
  const {
    send,
  } = require('../controllers/sendmail.controller')

  router.post('/sendmail', send)

  app.use('/api', router)
}