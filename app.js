const express = require('express');

//express app
const app = express();

//register view engines

app.set('view engine', 'ejs');

//listen for request

app.listen(3000);

app.get('/', (req, res) => {
    //res.send('<p>Home Page</p>');
    //res.sendFile('./views/index.html' , { root: __dirname });
    const blogs = [
        {title:'manish finds eggs' , snippet:'Lorem ipsum dolor sit amet'},
        {title:'light finds stars' , snippet:'Ut enim ad minim veniam'},
        {title:'ryuk defeats all' , snippet:'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'}
    ]
    res.render('index' ,{title : 'Home',blogs});
})

app.get('/about', (req, res) => {
  //res.send('<p>About Page</p>');
   //res.sendFile('./views/about.html' , { root: __dirname });
   res.render('about',{title : 'About'} );
})

app.get('/blogs/create',(req,res) =>{
    res.render('create',{title : 'Create new blog'});
})

//404

app.use( (req,res)=>{
    // res.status(404).sendFile('./views/404.html' , { root: __dirname });
    res.status(404).render('404',{title : '404'});
})