const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const sequelize = require('./db');
app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));
const loginController = require("./Controller/Signup.Controller")
const HomeController = require("./Controller/Home");



app.use("/" ,  HomeController);
app.use("/" , loginController)
app.use('/uploads', express.static('./uploads'));




const port = process.env.PORT || 3004;
app.listen(port, () => {
    sequelize.authenticate().then(() => {
        console.log('Connection has been established successfully.');
    }).catch(err => {
        console.error('Unable to connect to the database:', err);
    }
    );
    
})