const router = require('express').Router()
const DogsCtrl = require('../controllers/dogController');

router.get("/dogs", DogsCtrl.getAllDogs)
router.get("/dogs/:id", DogsCtrl.getDogById)
router.post("/dogs", DogsCtrl.addDog)
router.put("/dogs/:id", DogsCtrl.updateDog)
router.delete("/dogs/:id", DogsCtrl.deleteDog)

module.exports = router
