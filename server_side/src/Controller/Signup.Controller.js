const express = require("express")
const router = express.Router()
const jwt = require("jsonwebtoken")
require("dotenv").config()
const Ragister = require("../Model/Login.Model")
const Hashpassword = require('../utiles/PasswordHash');
const comparePassword = require('../utiles/ComparePassword');
const validateUser = require("../Middleware/userValidation")
const { body, validationResult } = require('express-validator');



const newToken = (user) => {
    return jwt.sign({ user}, process.env.TOKEN_SECRET, {
        expiresIn: "1h"
    })
}

router.post("/signup", validateUser  , body('Email').isEmail() , body("Password").isLength({min:5}), (req, res) => {
    const { Name, Email, Password } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    Ragister.create({Name , Email ,Password:Hashpassword(Password)}).then(user => {
        res.send({
            message: "User created successfully",
            user,
            token: newToken(user)
        })
    }).catch(err => {
        res.send( err.message)
    }
    )
})


router.post("/login" , (req, res) => {
    const { Email, Password } = req.body;
    Ragister.findOne({
        where: {
            Email
        }
    }).then(user => {
        if (user) {
            if (comparePassword(Password, user.Password)) {
                res.send({
                    message:"Login Success",
                    user,
                    token: newToken(user)
                })
            } else {
                res.send("Password is incorrect")
            }
        } else {
            res.send("User not found")
        }
    }
    ).catch(err => {
        res.send(err.message)
    }
    )
}
)




module.exports = router