import {model, Schema} from 'mongoose';
import {IBookModel} from '../models/interfaces/bookModel';

class BookSchema {
    static get schema() {
        var schema = new Schema({
            title: {
                type: String,
                required: true
            },
            author: {
                type: String,
                required: true
            },
            genre: {
                type: String,
                required: true
            },
            read: {
                type: Boolean,
                default: false
            }
        });
        return schema;
    }
}

var bookSchema = model<IBookModel>('Book', BookSchema.schema);
export = bookSchema;
