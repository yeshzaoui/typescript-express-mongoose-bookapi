import {Model, Document, Types} from 'mongoose';

import {IReadRepository} from '../interfaces/common/readRepository';
import {IWriteRepository} from '../interfaces/common/writeRepository';

export class BaseRepository<T extends Document> implements IReadRepository<T>, IWriteRepository<T> {
    private _model: Model<Document>;

    constructor(model: Model<Document>) {
        this._model = model;
    }

    create(item: T, callback: (error: any, result: any) => void) {
        this._model.create(item, callback);
    }

    update(_id: Types.ObjectId, item: T, callback: (error: any, result: any) => void) {
        this._model.update(_id, item, callback);
    }

    delete(_id: string, callback: (error: any, result: any) => void) {
        this._model.remove({ _id: this.toObjectId(_id) }, (err: any) => callback(err, null));
    }

    find(callback: (error: any, result: any) => void) {
        this._model.find({}, callback);
    }

    findById(_id: string, callback: (error: any, result: T) => void) {
        this._model.findById(_id, callback);
    }

    private toObjectId(_id: string): Types.ObjectId {
        return Types.ObjectId.createFromHexString(_id);
    }
}
