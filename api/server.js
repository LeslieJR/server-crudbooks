const express = require('express');
const cors = require('cors')
const server = express();
const routes = require('./routes')

//Middlewares
server.use(express.urlencoded({ extended: false }));
server.use(express.json()); 
server.use(cors());

//Routes
server.use('/api/books', routes.books);
server.use('/api/authors', routes.authors)


module.exports = server;