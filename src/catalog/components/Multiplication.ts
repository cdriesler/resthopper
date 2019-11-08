import ResthopperComponent from '../../models/ResthopperComponent';
import ResthopperComponentParam from '../../models/ResthopperComponentParam';
import ResthopperParam from './../../models/ResthopperParam';
import ParamBase from './../../models/ParamBase';
import { newGuid } from '../../utils/Guid';

export class Multiplication implements ResthopperComponent {

    public guid: string = "test";
    public name: string = "Multiplication";
    public category: string = "Math";
    public subCategory: string = "Test";
    public description: string = "Multiply numbers";
    public isObsolete: boolean = false;

    public input = 
    {
        "a": new MultiplicationInput_A()
    }
    public output = {}

    constructor() {

    }

    public getInputByIndex(index: number): ResthopperComponentParam | undefined {
        switch(index) {
            case 0:
                return this.input.a;
            default:
                return undefined;
        }
    }

    public setInputByIndex(index: number, source: string | ResthopperParam | ResthopperComponentParam): void {
        this.getInputByIndex(index)?.setSource(source);
    }

    public getOutputByIndex(index: number): ResthopperComponentParam | undefined {
        switch(index) {
            default:
                return undefined;
        }
    }
    
}

class MultiplicationInput_A extends ParamBase implements ResthopperComponentParam {

    public name: string = "A";
    public nickName: string = "A";
    public instanceDescription: string = "";
    public guid: string;
    public isOptional: boolean = false;
    public typeName: string = "value";

    public sources: string[] = [];

    constructor() {
        super();
        this.guid = newGuid();
    }
    
}