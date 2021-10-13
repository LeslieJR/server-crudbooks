const { Schema, model } = require('mongoose');

const BookSchema = new Schema(
    {
    name: {
        type:String,
        required:true
    },
    isbn: {
        type:String,
        unique: true,
        required:true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'Author',
        required:true
    }
   },
   {
    versionKey: false,
    timestamps: true
   }
    );
 
const BookModel = model('Book', BookSchema);
module.exports = BookModel;