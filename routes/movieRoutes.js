const router = require('express').Router();
const axios = require('axios');

const key = require('../key.js');




// router.get('/', (req, res) => {
//     // res.send('Now its time for the view');
//     //render the view, 1st argument is the file
//     // 2nd argument is an object
//     res.render('movies');
  
//   });


router.get('/movies', (req, res) => {
    axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}`)
        .then((movieResults) => {
            // console.log(Array.isArray(results.data))
            console.log(movieResults.data.results);
            
            let myData = movieResults.data.results;
            return res.render('main/movies', {
                myData: myData
            })
        })
});

module.exports =router