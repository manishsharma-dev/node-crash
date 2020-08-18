const fs = require('fs');

//read files

// fs.readFile('./docs/blog.txt', (err, data) => {
//     if(err) console.log(err);
//     console.log(data.toString());
// });

// console.log('last line');

//write files

fs.writeFile('./docs/blog.txt','hello, world.', () => {
 console.log('file written');
})
fs.writeFile('./docs/blog1.txt','hello, world.', () => {
 console.log('file written');
})


//directories



//delete files