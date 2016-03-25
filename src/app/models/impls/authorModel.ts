import {IAuthorModel} from '../interfaces/authorModel';

export class AuthorModel {
    private _authorModel: IAuthorModel;

    get name(): string {
        return this._authorModel.name;
    }

    get age(): number {
        return this._authorModel.age;
    }
}
