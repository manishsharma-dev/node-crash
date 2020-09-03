const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

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

app.use(morgan('dev'));

//mongoose and mongo sandbox routes

app.get('/add-blog', (req, res) => {
    const blog = new Blog({
        title: 'new Blog 2',
        snippet: 'about new blog 2',
        body: 'more about my new blog 2'
    });
    blog.save()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        })
})

app.get('/all-blogs', (req, res) => {
    Blog.find()
        .then((results) => {
            res.send(results);
        })
        .catch((err) => console.log(err));
})

app.get('/single-blog', (req, res) => {
    Blog.findById('5f4decde2624be2e3c6e8744')
        .then((result) => {
            res.send(result);
        })
        .catch((err) => console.log(err));
})

app.get('/', (req, res) => {
    //res.send('<p>Home Page</p>');
    //res.sendFile('./views/index.html' , { root: __dirname });
    const blogs = [
        { title: 'ryujaki finds Kira', snippet: 'Lorem ipsum dolor sit amet' },
        { title: 'light finds rem', snippet: 'Ut enim ad minim veniam' },
        { title: 'ryuk defeats all', snippet: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' }
    ]
    res.render('index', { title: 'Home', blogs });
})

app.get('/about', (req, res) => {
    //res.send('<p>About Page</p>');
    //res.sendFile('./views/about.html' , { root: __dirname });
    res.render('about', { title: 'About' });
})

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create new blog' });
})

//404
app.use((req, res) => {
    // res.status(404).sendFile('./views/404.html' , { root: __dirname });
    res.status(404).render('404', { title: '404' });
})