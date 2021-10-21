const bindFriendRoute = require('./routers/friend.router')
const bindSendMailRoute = require('./routers/sendmail.router')

module.exports = (app) => {
  bindFriendRoute(app)
  bindSendMailRoute(app)
}