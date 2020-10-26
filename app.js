const express = require('express');
const app = express();
const path = require('path');



//set the view for express
app.set('view engine', 'ejs');
//views are located
app.set('views', path.join(__dirname, 'views'));



//use static assets
app.use(express.static(path.join(__dirname, 'public')))

app.use('/ejs', require('./routes/movieRoutes'));

const port = 3002;


app.listen(port, () => {
console.log(`Listening on port ${port}`);
});
