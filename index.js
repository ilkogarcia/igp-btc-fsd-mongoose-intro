require('dotenv').config()

const express = require('express')
const app = express();
const db = require('./db/db')
const router = require('./router')
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(router)

db.then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
})
.catch((err) => {
    console.log(`Somethings whent wrong with your DB connection: ${err.message}`)
})