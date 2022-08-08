const Ragister = require("../Model/Login.Model");


const validateUser = (req, res, next) => {
   const { Email } = req.body;
    Ragister.findOne({
        where: {
            Email
        }
    }).then(user => {
        if (user) {
            res.send("User already exists")
        } else {
            next();
        }
    }
    ).catch(err => {
        res.send(err.message)
    }
    )
}


module.exports = validateUser;