const express = require('express');

const Router = express.Router();
const con = require('../db');



Router.get('/get', (req, res) => {
    con.query('SELECT * FROM address', (err, result) => {
        if (err) throw err;
        res.send(result);
    }
    )
});
Router.get('/get/:id', (req, res) => {
    const id = req.params.id;
    con.query('SELECT * FROM address WHERE id = ?', [id], (err, result) => {
        if (err) throw err;
        res.send(result);
    }
    )
    
}
);
    Router.post('/post', (req, res) => {
        const post = req.body;
        const sql = "insert into address (Name, Email, Contact) values (?, ?, ?)";
        con.query(sql, [post.Name, post.Email, post.Contact], function (err, result) {
            if (err) throw err;
            res.send(result);
        });
    }
    );
    Router.put('/put/:id', (req, res) => { 
        const id = req.params.id;
        const post = req.body;
        const sql = "update address set Name = ?, Email = ?, Contact = ? where id = ?";
        con.query(sql, [post.Name, post.Email, post.Contact, id], function (err, result) {
            if (err) throw err;
            console.log("1 record updated" + result.affectedRows);
            res.send(result);
        });
    }
    );
    Router.delete('/delete/:id', (req, res) => {
        const id = req.params.id;
        const sql = `delete from address where id = ${id}`;
        con.query(sql, id, function (err, result) {
            if (err) throw err;
            res.send(result);
        });
    }
    );


    module.exports = Router;