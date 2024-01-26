const express = require("express")
const verifyToken = require("../middleware/jwt")
const { getConversations, createConversations, getSingleConversation, updateConversations } = require("../controllers/conversation.controller")

const router = express.Router()

router.get("/", verifyToken, getConversations)
router.post("/", verifyToken, createConversations)
router.get("/single/:id", verifyToken, getSingleConversation)
router.put("/:id", verifyToken, updateConversations)



module.exports = router