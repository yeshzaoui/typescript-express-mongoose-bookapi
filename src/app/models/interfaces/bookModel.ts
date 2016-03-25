import {Document} from 'mongoose';

export interface IBookModel extends Document {
    title: string;
    author: string;
    genre: string;
    read: boolean;
}
