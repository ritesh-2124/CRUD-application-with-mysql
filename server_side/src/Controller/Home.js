const express = require('express');
const Router = express.Router();
const Address = require("../Model/Home.Model");
const upload = require("../Middleware/imageUpload");



Router.get('/get', (req, res) => {
    let limit = req.query.limit || 5;
    let offset = limit * (req.query.page - 1)||0;
    Address.findAll({
        limit: limit,
        offset: offset
    }).then((data) => {
        res.send(data);
    }).catch((err) => {
        res.send(err);
    })
})

Router.get('/get/:id', (req, res) => {
    Address.findAll({
        where: {
            ID: req.params.id
        }
    }).then(data => {
        res.send(data);
    }
    ).catch(err => {
        res.send(err);
    }
    );
}
);


Router.post('/post', upload ,(req, res) => {
    let datavalue = {
        Name: req.body.Name,
        Email: req.body.Email,
        Contact: req.body.Contact,
        Profile: req.file.path
    }
    Address.create(datavalue).then(data => {
        res.send(data);
    }).catch(err => {
        res.send(err.message);
    }
    );
}
);

Router.put('/put/:id', (req, res) => {
    Address.update(req.body, {
        where: {
            id: req.params.id
        }
    }).then(data => {
        res.send(data);
    }).catch(err => {
        
        res.send(err);
    }
    );
}
);
Router.delete('/delete/:id', (req, res) => {
    Address.destroy({
        where: {
            ID: Number(req.params.id)
        }
    }).then(data => {
        res.sendStatus(200).send(data);
    }).catch(err => {
        res.send(err);
    }
    );
}
);




module.exports =  Router    