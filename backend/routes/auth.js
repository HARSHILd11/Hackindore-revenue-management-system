const express = require("express")
const router = express.Router()







// Signup  Route ----------- ------------ ----------- ------------ ------------ ----------

router.get("/signup",(req,res)=>{
    res.json({message:"signup page get request"})
})


 module.exports=router;

