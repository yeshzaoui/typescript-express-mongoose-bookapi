import {BaseRepository} from './base/baseRepository';
import {IAuthorModel} from '../models/interfaces/authorModel';
import authorSchema = require('../schemas/authorSchema');

export class AuthorRepository extends BaseRepository<IAuthorModel>{
    constructor() {
        super(authorSchema)
    }
}
