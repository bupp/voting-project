var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(':memory:');

db.serialize(function () {
    db.run('CREATE TABLE voting (candidate TEXT, results INTEGER)');
    var stmt = db.prepare('INSERT INTO voting (candidate, results) VALUES (?,?)');

    stmt.run('garden', 0);
    stmt.run('linear', 0);
    stmt.run('gallery', 0);
    stmt.run('walk', 0);

    stmt.finalize();

    db.each('SELECT candidate, results FROM voting', function(err, row) {
        console.log(row.candidate + ': ' + row.results);
    })
})

module.exports = db;