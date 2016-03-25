import {model, Schema} from 'mongoose';

import {IAuthorModel} from '../models/interfaces/authorModel';

class AuthorSchema {
    static get schema() {
        var schema = new Schema({
            name: {
                type: String,
                required: true
            },
            age: {
                type: Number,
                required: true
            }
        });
        return schema;
    }
}

var authorSchema = model<IAuthorModel>('Author', AuthorSchema.schema);
export = authorSchema;
