"use strict";
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const controller = require('./controller');
const rest = require('./utils/rest');
const cors = require('@koa/cors');

const app = new Koa();

app.use(bodyParser());

app.use(cors({
    origin: function(ctx) {
        return 'http://localhost:3000';
    },
    credentials: true,
    allowHeaders: ['Content-Type'],
    allowMethods: ['GET', 'POST', 'DELETE', 'PUT', 'OPTIONS'],
    maxAge: 60
}));

app.use(rest.restify());

app.use(controller());

app.listen(3001);

console.log('server started at port 3001');