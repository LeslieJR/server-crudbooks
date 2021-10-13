const mongoose = require('mongoose');
const dbname = 'crud-books'

mongoose.connect('mongodb://localhost/'+dbname)
.then(()=>{
 console.log('the connection was successful') 
})
.catch((err)=>{
 console.log('there was an error ',err);
})