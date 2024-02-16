const express = require('express');
const router = express.Router();
const { createCareer, getCareers, getCareerById, updateCareer, deleteCareer } = require("../controllers/career")
const RequireAuth = require("../middleware/auth")


router.use(RequireAuth)
router.post("/career", createCareer)
router.get("/career", getCareers)
router.put("/career", updateCareer)
router.get("/careerByid", getCareerById)
router.delete('/career', deleteCareer)


module.exports = router;