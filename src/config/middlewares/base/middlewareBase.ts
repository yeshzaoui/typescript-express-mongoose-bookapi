import * as express from 'express';
import * as bodyParser from 'body-parser';

import {MethodOverride} from '../methodOverride';
import {BaseRoute} from '../../routes/base/baseRoute';

export class MiddlewareBase {

    static get configuration() {
        var app = express();
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());
        app.use(MethodOverride.configuration());
        app.use(new BaseRoute().routes);

        return app;
    }
}
