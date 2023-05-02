const express = require("express")
const multer = require("multer")


const uploadData = multer()

// controllers
const {getAllData} = require("../controllers/basicControllers")

const router = express.Router()

router.post("/getDetails", uploadData.none() ,getAllData)

module.exports = router