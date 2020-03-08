const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

//GET query to DB
router.get('/', (req, res) => {
    console.log('in / GET');
    //Query commands
    let queryString = `SELECT * FROM "movies";`;
    //run a query in pool    
    pool.query(queryString).then((results) => {
    // if successful, we'll respond with the rows from the results
        console.log('query results', results.rows);
        res.send(results.rows);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    })
});
//GET query to DB
router.put('/:id', (req, res) => {
    //Query commands
    let id = req.params.id;
    let queryString = `UPDATE "movies" SET "title"='$1', "description"='$2' WHERE "id"=$3;`;
    //run a query in pool
    pool.query(queryString, []).then((results) => {
    // if successful, we'll respond with the rows from the results
        res.send(200);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
})
});



module.exports = router;