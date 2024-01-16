const express = require("express")
const { createGig, deleteGig, getGig, getGigs } = require("../controllers/gig.controller")
const verifyToken = require("../middleware/jwt")

const router = express.Router()

router.post("/", verifyToken, createGig)
router.delete("/", verifyToken, deleteGig)
router.get("/", verifyToken, getGig)
router.get("/", verifyToken, getGigs)




module.exports = router