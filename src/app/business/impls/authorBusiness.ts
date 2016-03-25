import {AuthorRepository} from '../../repositories/authorRepository';
import {IAuthorBusiness} from '../interfaces/authorBusiness';
import {IAuthorModel} from '../../models/interfaces/authorModel';

export class AuthorBusiness implements IAuthorBusiness {

    private _authorRepository: AuthorRepository;

    constructor() {
        this._authorRepository = new AuthorRepository();
    }

    create(item: IAuthorModel, callback: (error: any, result: any) => void) {
        this._authorRepository.create(item, callback);
    }

    find(callback: (error: any, result: any) => void) {
        this._authorRepository.find(callback);
    }

    update(_id: string, item: IAuthorModel, callback: (error: any, result: any) => void) {

        this._authorRepository.findById(_id, (err, res) => {
            if (err) callback(err, res);

            else
                this._authorRepository.update(res._id, item, callback);

        });
    }

    delete(_id: string, callback: (error: any, result: any) => void) {
        this._authorRepository.delete(_id, callback);
    }

    findById(_id: string, callback: (error: any, result: IAuthorModel) => void) {
        this._authorRepository.findById(_id, callback);
    }
}
