const express = require("express")
const { createNotes, getNotes, deleteNotes } = require("../controller/controller")
const router = express.Router()

router.get("/", (req, res)=>{
    res.send("Api is working fine")
})


router.post("/createNotes", createNotes)

router.get("/getNotes", getNotes)

router.delete("/deleteNotes/:id", deleteNotes)

module.exports = router;