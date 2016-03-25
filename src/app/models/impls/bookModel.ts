import {IBookModel} from '../interfaces/bookModel';

export class BookModel {
    private _bookModel: IBookModel;

    constructor(bookModel: IBookModel) {
        this._bookModel = bookModel;
    }

    get title(): string {
        return this._bookModel.title;
    }

    get author(): string {
        return this._bookModel.author;
    }

    get genre(): string {
        return this._bookModel.genre;
    }

    get read(): boolean {
        return this._bookModel.read;
    }
}
