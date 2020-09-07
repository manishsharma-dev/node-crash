const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const blogRoutes = require('./routes/BlogRoutes');

//express app
const app = express();

//Connect to mongodb
const dbURI = 'mongodb+srv://ManishSharma:Manys@1112@nodetuts.btjzl.mongodb.net/Node-Tuts?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(3000))
    .catch((err) => console.log(err));
//register view engines

app.set('view engine', 'ejs');

//listen for request



//middleware and static files

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.redirect('/blogs');
});

app.get('/about', (req, res) => {
    //res.send('<p>About Page</p>');
    //res.sendFile('./views/about.html' , { root: __dirname });
    res.render('about', { title: 'About' });
});

app.use('/blogs',blogRoutes);
//404
app.use((req, res) => {
    // res.status(404).sendFile('./views/404.html' , { root: __dirname });
    res.status(404).render('404', { title: '404' });
})