import {BaseRepository} from './base/baseRepository';
import {IBookModel} from '../models/interfaces/bookModel';
import bookSchema = require('../schemas/bookSchema');

export class BookRepository extends BaseRepository<IBookModel>{
    constructor() {
        super(bookSchema);
    }
}
