import RouterConfig from '../app/router';
import {StaticRouter} from 'react-router-dom';
import {renderToString} from 'react-dom/server';
import React from 'react';
import path from 'path';
import fs from 'fs';
import {Provider} from 'react-redux';
import createStore from '../app/redux/store';

function templating(props) {
    const template = fs.readFileSync(path.join(__dirname, '../template/server.html'), 'utf-8');
    const demo = template.replace(/{{([\s\S]*?)}}/g, (_, key) => props[key.trim()]);
    return demo;
}

export default function (ctx, next) {
    try {
        ctx.render = (data = {}) => {
            const store = createStore(data);
            const html = renderToString(
                <Provider store={store}>
                    <StaticRouter location={ctx.url}>
                        <RouterConfig/>
                    </StaticRouter>
                </Provider>
            );
            ctx.body = templating({
                html,
                store: JSON.stringify(data, null, 4)
            });
        }
    } catch (err) {
        ctx.body = templating({html: err.message});
    }
    ctx.type = 'text/html';
    return next();
};
