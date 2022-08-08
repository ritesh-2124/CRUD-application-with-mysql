const express = require('express');

const Router = express.Router();
const con = require('../db');
const Sequelize = require('sequelize');
const Address = require("../Model/Home.Model");


Router.get('/get', (req, res) => {
    console.log("get");
    Address.findAll().then(data => {
        res.send(data);
    }).catch(err => {
        res.send(err);
    }
    );
}
);

Router.get('/get/:id', (req, res) => {
    console.log("get");
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


Router.post('/post', (req, res) => {
    console.log("post");
    console.log(req.id , req.Name)
    Address.create(req.body).then(data => {
        res.send(data);
    }).catch(err => {
        res.send(err);
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



module.exports = Router;    






// Router.get('/get',async (req, res) => {
//     // Find all users
// const users = await Address.findAll();
// res.send(users);

// }
// );
// Router.get('/get/:id', (req, res) => {
//     const id = req.params.id;
//     con.query('SELECT * FROM address WHERE id = ?', [id], (err, result) => {
//         if (err) throw err;
//         res.send(result);
//     }
//     )
    
// }
// );
//     Router.post('/post', (req, res) => {
//         const post = req.body;
//         const sql = "insert into address (Name, Email, Contact) values (?, ?, ?)";
//         con.query(sql, [post.Name, post.Email, post.Contact], function (err, result) {
//             if (err) throw err;
//             res.send(result);
//         });
//     }
//     );
//     Router.put('/put/:id', (req, res) => { 
//         const id = req.params.id;
//         const post = req.body;
//         const sql = "update address set Name = ?, Email = ?, Contact = ? where id = ?";
//         con.query(sql, [post.Name, post.Email, post.Contact, id], function (err, result) {
//             if (err) throw err;
//             res.send(result);
//         });
//     }
//     );
//     Router.delete('/delete/:id', (req, res) => {
//         const id = req.params.id;
//         const sql = `delete from address where id = ${id}`;
//         con.query(sql, id, function (err, result) {
//             if (err) throw err;
//             res.send(result);
//         });
//     }
//     );


    // module.exports = Router;