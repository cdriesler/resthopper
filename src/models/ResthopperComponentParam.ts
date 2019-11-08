import ParamBase from './ParamBase';

export default interface ResthopperComponentParam extends ParamBase {
    name: string;
    nickName: string;
    guid: string;
    instanceDescription: string;
    isOptional: boolean;
    typeName: string;
}