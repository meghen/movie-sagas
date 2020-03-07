const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

//GET query to DB
router.get('/', (req, res) => {
    console.log('in / GET');
    //Query commands
    let queryString = `SELECT "movies"."id","title","poster","description" FROM "movies_genres"
    JOIN "genres" ON "genres"."id" = "movies_genres"."genre_id"
    JOIN "movies" ON "movies"."id" = "movies_genres"."movie_id"
    GROUP BY "movies"."id","movies"."title","poster","description";`;
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


module.exports = router;