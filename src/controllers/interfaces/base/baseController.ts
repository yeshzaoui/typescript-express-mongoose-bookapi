import {IBaseBusiness} from '../../../app/business/interfaces/base/baseBusiness';
import {IReadController} from '../common/readController';
import {IWriteController} from '../common/writeController';

export interface IBaseController<T extends IBaseBusiness<Object>> extends IReadController, IWriteController {

}
