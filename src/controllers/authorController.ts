import {Request, Response} from 'express';


import {IBaseController} from './interfaces/base/baseController';
import {IAuthorModel} from '../app/models/interfaces/authorModel';
import {AuthorBusiness} from '../app/business/impls/authorBusiness';

export class AuthorController implements IBaseController<AuthorBusiness>{

    private _authorBusiness: AuthorBusiness;

    constructor() {
        this._authorBusiness = new AuthorBusiness();
    }

    create(req: Request, res: Response): void {
        try {
            var author: IAuthorModel = <IAuthorModel>req.body;
            this._authorBusiness.create(author, (error, result) => {
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
            var author: IAuthorModel = <IAuthorModel>req.body;
            this._authorBusiness.update(_id, author, (error, result) => {
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
            this._authorBusiness.delete(_id, (error, result) => {
                if (error) res.send({ "error": "error" });
                else res.send({ "success": "success" });
            });
        } catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    }

    find(req: Request, res: Response): void {
        try {

            this._authorBusiness.find((error, result) => {
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
            this._authorBusiness.findById(_id, (error, result) => {
                if (error) res.send({ "error": "error" });
                else res.send(result);
            });
        } catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    }
}
