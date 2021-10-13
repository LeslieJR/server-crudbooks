const mongoose = require('mongoose');
const uri = process.env.MONGODB_URI;
const options = {
    useNewUrlParser: true, 
    useUnifiedTopology: true
  }

  try{
    mongoose.connect(uri, options)
  }catch(error){
    handleError(error);
  }

