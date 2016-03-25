import {Document} from 'mongoose';

export interface IAuthorModel extends Document {
    name: string;
    age: number;
}
