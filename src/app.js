const express = require('express');
const SMTP_CONFIG = require('./config/smtp')

const cors = require('cors')

const bindAPIRoutes = require('./api')
const app = express();

const PORT = 3001

const connectDb = require('./config/database')

app.use(cors())
app.use(express.json())


bindAPIRoutes(app)


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} <http://localhost:${PORT}>`)
})

