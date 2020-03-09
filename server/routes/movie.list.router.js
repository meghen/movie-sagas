const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

//GET query to DB
router.get('/', (req, res) => {
    //Query commands
    let queryString = `SELECT * FROM "movies";`;
    //run a query in pool    
    pool.query(queryString).then((results) => {
    // if successful, we'll respond with the rows from the results
        res.send(results.rows);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    })
});
//movies_genre GET to db
router.get('/genres/:id', (req, res) => {
    //Query commands
    let queryString = `SELECT * FROM "movies_genres"
    JOIN "genres" ON "genres"."id" = "movies_genres"."genre_id"
    JOIN "movies" ON "movies"."id" = "movies_genres"."movie_id"
    WHERE "movies"."id" = $1;`;
    //run a query in pool    
    pool.query(queryString, [req.params.id]).then((results) => {
    // if successful, we'll respond with the rows from the results
        res.send(results.rows);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    })
});
//PUT query to DB
router.put('/:id', (req, res) => {
    //Query commands
    console.log('PUT ROUTER: ', req.body, req.params.id);
    
    let queryString = `UPDATE "movies" SET "title"=$1, "description"=$2 WHERE "id"=$3;`;
    //run a query in pool
    pool.query(queryString, [req.body.title, req.body.description, req.params.id]).then((results) => {
    // if successful, we'll respond with OK
        res.sendStatus(200);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    })
});



module.exports = router;