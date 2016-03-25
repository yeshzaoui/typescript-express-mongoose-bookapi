import {Router} from 'express';
import {AuthorController} from '../../controllers/authorController';

var router = Router();

export class AuthorRoute {
    private _authorController: AuthorController;

    constructor() {
        this._authorController = new AuthorController();
    }

    get routes() {
        var controller = this._authorController;
        router.get('/authors', controller.find);
        router.get('/authors/:_id', controller.findById);
        router.post('/authors', controller.create);
        router.put('/authors/:_id', controller.update);
        router.delete('/authors/:_id', controller.delete);

        return router;
    }
}
