import * as express from 'express';
import {BookRoute} from '../bookRoute';

var app = express();

export class BaseRoute {
    get routes() {
        app.get('/', function(req, res) {
            res.send('Welcome to my API');
        });
        app.use('/', new BookRoute().routes);
        return app;
    }
}
