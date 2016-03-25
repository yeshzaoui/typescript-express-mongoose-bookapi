import {Router} from 'express';
import {BookController} from '../../controllers/bookController';

var router = Router();
export class BookRoute {
    private _bookController: BookController;

    constructor() {
        this._bookController = new BookController();
    }

    get routes() {
        var controller = this._bookController;
        router.get('/books', controller.find);
        router.get('/books/:_id', controller.findById);
        router.post('/books', controller.create);
        router.put('/books/:_id', controller.update);
        router.delete('/books/:_id', controller.delete);

        return router;
    }

}
