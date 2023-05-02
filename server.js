const express = require("express")
require("dotenv").config()

// routes
const basicRoutes = require("./routes/basicRoutes")

const app = express()



app.use((req,res,next)=>{
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With,Content-Type, Accept"
  )
  next()
})

app.use(express.json())


app.use("/api/basicRoutes", basicRoutes)

app.listen(process.env.PORT, ()=>{
  console.log("server is running on PORT :" , process.env.PORT);
})