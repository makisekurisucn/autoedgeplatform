let fn_gettest = async (ctx, next) => {
    ctx.response.body = {
        method: 'get',
        type: 'test',
        status: 'success'
    }
}

let fn_getRestTest = async (ctx, next) => {
    ctx.rest({
        name: 'rest test',
        type: 'get',
        status: 'success',
        url: '/api/test'
    })
}

let fn_getRestText = async (ctx, next) => {
    ctx.rest(
        'name: rest text ;type: get;status: success, url: /api/plain', 'text/plain'
    )
}

let fn_getRestHTML = async (ctx, next) => {
    ctx.rest(
        '<h1>this is HTML page</h1>', 'text/html'
    )
}

let fn_crossGetTest = async (ctx, next) => {
    console.log('  receive cross get');
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.rest({
        type: 'cross origin',
        status: 'success'
    })
}

let fn_crossPutTest = async (ctx, next) => {
    console.log('  receive cross put');
    // ctx.set('Access-Control-Allow-Origin', '*');
    // ctx.set('Access-Control-Allow-Methods', 'PUT');
    ctx.rest({
        method: 'put',
        type: 'cross origin',
        status: 'success'
    })
    
}

let fn_crossPostTest = async (ctx, next) => {
    console.log('  receive cross post');
    // ctx.set('Access-Control-Allow-Origin', '*');
    // ctx.set('Access-Control-Allow-Methods', 'POST');
    // ctx.set('Access-Control-Allow-Headers', 'content-type');
    // ctx.rest({
    //     method: 'put',
    //     type: 'cross origin',
    //     status: 'success'
    // })
    ctx.rest('sssssss')
}

module.exports = {
    'GET /test': fn_gettest,
    'GET /api/test': fn_getRestTest,
    'GET /api/plain': fn_getRestText,
    'GET /api/html': fn_getRestHTML,
    'GET /api/cross/getTest': fn_crossGetTest,
    'PUT /api/cross/getTest': fn_crossPutTest,
    'POST /api/cross/getTest': fn_crossPostTest
}