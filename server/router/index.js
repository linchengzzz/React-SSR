import Router from 'koa-router';
import React from 'react';
const routes = new Router();

routes.get('/', (ctx, next) => {
    ctx.render({
        home: {
            title: 'home title'
        }
    });
    next();
});

routes.get('/list', (ctx, next) => {
    ctx.render({
        list: {
            list: [
                'list3',
                'list4',
                'list5'
            ]
        }
    });
    next();
});

export default routes;
