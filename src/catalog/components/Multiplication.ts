import ResthopperComponent from '../../models/ResthopperComponent';
import ResthopperParameter from '../../models/ResthopperParameter';
import { newGuid } from '../../utils/Guid';

export class Multiplication extends ResthopperComponent {

    public guid: string = "ce46b74e-00c9-43c4-805a-193b69ea4a11";
    public name: string = "Multiplication";
    public category: string = "Math";
    public subCategory: string = "Test";
    public description: string = "Multiply numbers";
    public isObsolete: boolean = false;

    public input: 
    {
        "a": MultiplicationInput_A
    }
    public output: 
    {

    }

    constructor() {
        super();
        this.input = {
            "a": new MultiplicationInput_A(),
        }
        this.output = {};
    }

    public static create(): Multiplication {
        return new Multiplication();
    }
    
}

class MultiplicationInput_A extends ResthopperParameter {

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