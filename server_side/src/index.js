const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const con = require('./db');


app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", require('./Controller/Home'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
    con.connect((err) => {  //connect to the database
        if (err) throw err;
        console.log('connected to the database');
    })
    console.log(`Server is running on port ${port}`);
})