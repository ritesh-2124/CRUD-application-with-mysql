const multer = require("multer")
const path = require("path")


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads")
    }
    , filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 15
    }
    , fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/jpeg" || file.mimetype == "image/png" || file.mimetype == "image/jpg") {
            cb(null, true)
        }else if(file.mimetype == "application/pdf"){
            cb(null, true)
        }
        else {
            cb(null, false)
        }
    }
}).single("Profile")

module.exports = upload
