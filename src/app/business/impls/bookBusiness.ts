import {BookRepository} from '../../repositories/bookRepository';
import {IBookBusiness} from '../interfaces/bookBusiness';
import {IBookModel} from '../../models/interfaces/bookModel';
import {BookModel} from '../../models/impls/bookModel';

export class BookBusiness implements IBookBusiness {

    private _bookRepository: BookRepository;

    constructor() {
        this._bookRepository = new BookRepository();
    }

    create(item: IBookModel, callback: (error: any, result: any) => void) {
        this._bookRepository.create(item, callback);
    }

    find(callback: (error: any, result: any) => void) {
        this._bookRepository.find(callback);
    }

    update(_id: string, item: IBookModel, callback: (error: any, result: any) => void) {

        this._bookRepository.findById(_id, (err, res) => {
            if (err) callback(err, res);

            else
                this._bookRepository.update(res._id, item, callback);

        });
    }

    delete(_id: string, callback: (error: any, result: any) => void) {
        this._bookRepository.delete(_id, callback);
    }

    findById(_id: string, callback: (error: any, result: IBookModel) => void) {
        this._bookRepository.findById(_id, callback);
    }
}
