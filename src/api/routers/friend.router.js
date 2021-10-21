const { Router } = require('express')

const router = Router()

module.exports = app => {
  const {
    list,
    create,
    retrieve,
    update,
    destroy
  } = require('../controllers/friend.controller')

  const friendMiddleware = require("../middlewares/friend.middleware")

  router.get('/friends', list)
  router.post('/friends', create)
  router.get('/friends/:id(\\d+)', retrieve)
  router.put('/friends/:id(\\d+)', update)
  router.delete('/friends/:id(\\d+)', destroy)

  app.use('/api', router)
}