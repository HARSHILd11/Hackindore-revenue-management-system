const express = require("express");
const router = express.Router();
const USERS = require("../models/user");
const bcrypt = require('bcrypt');
const { jwt_secret } = require("../keys")
const jwt = require("jsonwebtoken")
const requireLogin = require("../middlewares/requireLogin")


// Signup Route
router.get("/signup", (req, res) => {
    res.json({ message: "Signup page GET request" });
});

router.post("/signup", (req, res) => {
    const { firstName,
        lastName,
        userName,
        dob,
        gender,
        nationality,
        emailAddress,
        mobileNumber,
        emailVerified,
        mobileVerified,
        govIdInfo,
        city,
        wardNo,
        zoneNo,
        homeAddress,
        occupation,
        preferredLanguage,
        alternateNumber,
        tncAccepted,
        password
    } = req.body;


    // Check for required fields
    if (!firstName || !lastName || !userName||  !dob || !gender || !emailAddress ||
        !mobileNumber || !govIdInfo || !city || !wardNo || !zoneNo ||
        !homeAddress || !tncAccepted || !password) {
        console.log("Enter all the required fields");
        return res.status(400).send("Please fill all the required fields");
    }

    // Check if user with the same government ID is already registered
    USERS.findOne({ govIdInfo: govIdInfo })
        .then((savedUser) => {
            if (savedUser) {
                return res.json({ message: "User with this government ID is already registered" });
            }

            // Hash the password and save the user
            bcrypt.hash(password, 10).then((hashedPassword) => {
                const user = new USERS({
                    firstName,
                    lastName,
                    userName,
                    dob,
                    gender,
                    nationality,
                    emailAddress,
                    mobileNumber,
                    emailVerified,
                    mobileVerified,
                    govIdInfo,
                    city,
                    wardNo,
                    zoneNo,
                    homeAddress,
                    occupation,
                    preferredLanguage,
                    alternateNumber,
                    tncAccepted,
                    password: hashedPassword,
                });

                user.save()
                    .then((savedUser) => {
                        console.log(savedUser);
                        return res.json({ message: "Signup successful" });
                    })
                    .catch(err => {
                        console.log(err);
                        return res.status(500).send("Error saving the user");
                    });
            }).catch(err => {
                console.log(err);
                return res.status(500).send("Error hashing the password");
            });
        })
        .catch(err => {
            console.log(err);
            return res.status(500).send("Error checking existing user");
        });
});

router.post("/signin", (req, res) => {
    const { govIdInfo , mobileNumber ,  password , userName  } = req.body;

    if (!govIdInfo) {
        return res.status(422).json({ error: "Please Add Email and Password" })
    }

    USERS.findOne({ userName: userName })
        .then((savedUser) => {
            if (!savedUser) {
                return res.status(422).json({ error: "Invalid username" })
            }
            bcrypt.compare(password, savedUser.password)
                .then((match) => {
                    if (match) {
                        const token = jwt.sign({ _id: savedUser.id }, jwt_secret)
                        // console.log(token)
                        return res.status(422).json({ message: "Signin Successful", token: token })
                    }
                    else {
                        return res.status(422).json({ error: "Invalid Password" })
                    }
                })
                .catch(err => console.log(err))
        })

})

module.exports = router;
