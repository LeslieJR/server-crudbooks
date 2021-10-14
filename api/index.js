require('./mongo');
const server = require('./server');

server.set(port.env.PORT||'port', 4000);
server.listen(server.get('port'), ()=>{
    console.log('listening to port number: ', server.get('port'));
})
