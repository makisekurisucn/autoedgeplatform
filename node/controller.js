"use strict";
const fs = require('fs');

function addMapping(router, mapping) {
    for (let url in mapping) {
        if (url.startsWith('GET ')) {
            let path = url.substring(4);
            router.get(path, mapping[url]);
        } else if (url.startsWith('PUT ')) {
            let path = url.substring(4);
            router.put(path, mapping[url]);
        } else if (url.startsWith('POST ')) {
            let path = url.substring(5);
            router.post(path, mapping[url]);
        } else if (url.startsWith('DELETE ')) {
            let path = url.substring(7);
            router.del(path, mapping[url]);
        } else {
            console.log(`invalid URL: ${url}`);
        }
    }
}

function addControllers(router, dir) {
    fs.readdirSync(__dirname + '/' + dir).filter((f) => {
        return f.endsWith('js');
    }).forEach((f) => {
        let mapping = require(__dirname + '/' + dir + '/' + f);
        addMapping(router, mapping);
    })
}

module.exports = function(dir) {
    let controller_dir = dir || 'routes',
        router = require('koa-router')();
    addControllers(router, controller_dir);
    return router.routes();
}