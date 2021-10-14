const mongoose = require('mongoose');
const uri = process.env.MONGODB_URI;

mongoose.connect(uri)
.then(()=>{
 console.log('the connection was successful') 
})
.catch((err)=>{
 console.log('there was an error ',err);
})

