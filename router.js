// Import Express using commonjs
const { Router } = require('express')
const router = Router()

// API main
router.get('/', async (req, res) => {
    return res.json({ message: "Hello, World ✌️" })
})

// Authentication and Authorization Endpoints
const authRoutes = require('./routes/authRoutes')
router.use(authRoutes)

// Dogs Endpoints
const dogsRoutes = require('./routes/dogsRoutes')
router.use(dogsRoutes)

module.exports = router
