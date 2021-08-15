const fastify = require('fastify');
const logger = require('./logger');

const app = fastify({logger});

app.get('/', (req, res)=>{
   res.send({hello: "World"})
});

app.listen(3000, ()=> console.log('Server ready'));
