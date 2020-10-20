const router = require('express').Router();
const axios = require('axios');

const key = require('./key.js');

router.get('/url', (req, res) => {
    axios.get(`https://api.themoviedb.org/3/movie/550?api_key=${key}`)
        .then((results) => {
            // console.log(Array.isArray(results.data))
           console.log(results.data);
            return res.render('main/url', {
                myData: myData
            })
        })
});