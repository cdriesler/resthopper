import ResthopperParam from './ResthopperParam';
import ResthopperComponentParam from './ResthopperComponentParam';

export default interface ObjectBase {
    guid: string;
    name: string;
    description: string;
    category: string;
    subCategory: string;
    isObsolete: boolean;

    getInputByIndex(index: number): ResthopperComponentParam | undefined;
    setInputByIndex(index: number, source: string | ResthopperParam | ResthopperComponentParam): void;
    getOutputByIndex(index: number): ResthopperComponentParam | undefined;
}