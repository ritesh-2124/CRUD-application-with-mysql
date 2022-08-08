const express = require("express")
const router = express.Router()
const jwt = require("jsonwebtoken")
require("dotenv").config()
const Ragister = require("../Model/Login.Model")


const newToken = (user) => {
    return jwt.sign({ user}, process.env.TOKEN_SECRET, {
        expiresIn: "1h"
    })
}


router.post("/signup", (req, res) => {
    Ragister.create(req.body).then(user => {
        res.send({
            user,
            token: newToken(user)
        })
    }).catch(err => {
        res.send(err.message)
    }
    )
})


router.post("/login", (req, res) => {
    Ragister.findOne({
        where: {
            email: req.body.email
        }
    }).then(user => {
        if (!user) {
            return res.status(401).send({
                message: "Wrong email or password"
            })
        }
        user.validPassword(req.body.password).then(isMatch => {
            if (!isMatch) {
                return res.status(401).send({
                    message: "Wrong email or password"
                })
            }
            res.send({
                user,
                token: newToken(user)
            })
        }).catch(err => {
            res.send(err)
        }
        )
    }).catch(err => {
        res.send(err)
    }
    )
}
)



// router.post("/signin", (req, res) => {
//     Ragister.findOne({
//         where: {
//             Email: req.body.Email
//         }
//     }).then(user => {
//         if (!user) {
//             res.send({
//                 error: "User not found"
//             })
//         } else {
//             if (user.Password === req.body.Password) {
//                 res.send({
//                     user,
//                     token: newToken(user)
//                 })
//             } else {
//                 res.send({
//                     error: "Password is incorrect"
//                 })
//             }
//         }
//     }).catch(err => {
//         res.send(err)
//     }
//     )
// })

module.exports = router