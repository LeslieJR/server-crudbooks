const mongoose = require('mongoose');
const uri = process.env.MONGODB_URI;
const options = {
    useNewUrlParser: true, 
    useUnifiedTopology: true
  }

mongoose.connect(uri, options)
.then(()=>{
 console.log('the connection was successful') 
})
.catch((err)=>{
 console.log('there was an error ',err);
})

