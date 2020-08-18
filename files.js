const fs = require('fs');

//read files

fs.readFile('./docs/blog.txt', (err, data) => {
    if(err) console.log(err);
    console.log(data.toString());
});

console.log('last line');

//write files



//directories



//delete files