import ObjectBase from './ObjectBase';
import ResthopperComponentParam from './ResthopperComponentParam';

export default interface ResthopperComponent extends ObjectBase {
    input: {
        [name: string]: ResthopperComponentParam
    }
    output: {
        [name: string]: ResthopperComponentParam
    }
}
