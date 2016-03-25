import {IReadBusiness} from '../common/readBusiness';
import {IWriteBusiness} from '../common/writeBusiness';

export interface IBaseBusiness<T> extends IReadBusiness<T>, IWriteBusiness<T> {

}
