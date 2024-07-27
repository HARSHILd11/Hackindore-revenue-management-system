const express = require("express")
const router = express.Router()







// Signup  Route ----------- ------------ ----------- ------------ ------------ ----------

router.get("/signup",(req,res)=>{
    res.json({message:"signup page get request"})
})
router.post("/signup",()=>{
    const {firstname , lastname , dob , gender , nationality , email , mobileNumber , emailVerified , mobileVerified , govtIdInfo , residentialAddress ,idProof ,occupation , prefferedLanguage , alternateNumber , tncAccept} = req.body;
    res.send("Post api is succesful")
})


 module.exports=router;

