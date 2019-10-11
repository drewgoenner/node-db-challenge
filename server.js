const express = require('express');
const helmet = require('helmet');

// const projectRouter = require('./routers/projecRouter');
// const resourceRouter = require('./routers/resourceRouteer');


const server = express();

server.use(helmet());
server.use(express.json());

// server.use('/api/projects', projectRouter);
// server.use('/api/resources', resourceRouter);

module.exports = server;