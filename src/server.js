const express = require('express');
const app = express();

var db = require("./database.js");

app.use(express.json());

app.get('/reset', (request, response) => {
    var stmt = db.prepare('UPDATE voting SET results = 0');

    stmt.run();
    stmt.finalize();
    response.sendStatus(200)
});

app.post('/vote', function(request, response){
    const obj = request.body;

    Object.entries(obj).forEach(([key, value]) => {
        var newVotes = [];
        value.forEach(vote => {
            if (vote.selection === true){
                newVotes.push(vote.id);
            }
        })
        // At this point, we know which entries got voted for
        var stmt = db.prepare('UPDATE voting SET results = results + 1 WHERE candidate = (?)');
        newVotes.forEach(e => {
            stmt.run(e);            
        });
        stmt.finalize();

    });
    response.sendStatus(200);
});

app.get('/results', (req, res) => {
    var sql = "SELECT * FROM voting";
    var params = []
    db.all(sql, params, (err, rows) => {
        if(err) {
            res.status(400).json({"error":err.message});
            return;
        }
        res.json({
            "message" : "success",
            "data": rows
        })
    });
});

app.get('/initialize', (req, res) => {

    var stmt = db.prepare('UPDATE voting SET results = 254 WHERE candidate = "garden"');
    stmt.run();
    var stmt = db.prepare('UPDATE voting SET results = 936 WHERE candidate = "linear"');
    stmt.run();
    var stmt = db.prepare('UPDATE voting SET results = 337 WHERE candidate = "gallery"');
    stmt.run();
    var stmt = db.prepare('UPDATE voting SET results = 701 WHERE candidate = "walk"');
    stmt.run();
    stmt.finalize();
    console.log("initialize");
    res.sendStatus(200);
});

app.get('/hey', (req, res) => res.send('ho!'));
app.listen(8080);