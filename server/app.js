import React from 'react';
import Koa from 'koa';
import routes from './router';
import templating from './templating';

const app = new Koa();

app.use(templating);
app.use(routes.routes(), routes.allowedMethods());

app.listen(9000, () => console.log('server start'));
