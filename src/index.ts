import * as express from 'express';
import {connect} from 'mongoose';

import {MiddlewareBase} from './config/middlewares/base/middlewareBase';
import {Url} from './config/Constants/urls';

const db = connect(Url.MONGO_CONNECTION);
var app = express();
var port = process.env.PORT || 3000;
app.set("port", port);
app.use(MiddlewareBase.configuration);
app.listen(port, () => {
    console.log("Node app is running at localhost:" + port);
});
