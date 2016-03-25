import {Request, Response} from 'express';

import {IBaseController} from './interfaces/base/baseController';
import {IBookModel} from '../app/models/interfaces/bookModel';
import {BookBusiness} from '../app/business/impls/bookBusiness';

export class BookController implements IBaseController<BookBusiness>{

    create(req: Request, res: Response): void {
        try {
            var book: IBookModel = <IBookModel>req.body;
            var bookBusiness = new BookBusiness();
            bookBusiness.create(book, (error, result) => {
                if (error) res.send({ "error": "error" });
                else res.send(result);
            });
        } catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    }

    update(req: Request, res: Response): void {
        try {
            var _id: string = req.params._id;
            var book: IBookModel = <IBookModel>req.body;
            var bookBusiness = new BookBusiness();
            bookBusiness.update(_id, book, (error, result) => {
                if (error) res.send({ "error": "error" });
                else res.send(result);
            });
        } catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    }

    delete(req: Request, res: Response): void {
        try {
            var _id: string = req.params._id;
            var bookBusiness = new BookBusiness();
            bookBusiness.delete(_id, (error, result) => {
                if (error) res.send({ "error": "error" });
                else res.send(result);
            });
        } catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    }

    find(req: Request, res: Response): void {
        try {
            var bookBusiness = new BookBusiness();
            bookBusiness.find((error, result) => {
                if (error) res.send({ "error": "error" });
                else res.send(result);
            });
        } catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    }

    findById(req: Request, res: Response): void {
        try {
            var _id: string = req.params._id;
            var bookBusiness = new BookBusiness();
            bookBusiness.findById(_id, (error, result) => {
                if (error) res.send({ "error": "error" });
                else res.send(result);
            });
        } catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    }
}
