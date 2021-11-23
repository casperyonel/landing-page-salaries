require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const { SERVER_PORT } = process.env || 3000
const { seed } = require("./seed")

const { updateWaitlist } = require("./controller")

app.use(express.json())
app.use(cors())

// INITIAL SEED
app.post('/seed', seed)

// WAITLIST
app.post('/waitlist', updateWaitlist)






app.listen(SERVER_PORT, () => console.log(`Server up on ${SERVER_PORT}`))