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
        "a": MultiplicationInput_A,
        "b": MultiplicationInput_B,
    }
    public output: 
    {
        "result": MultiplicationOutput_Result,
    }

    constructor() {
        super();
        this.input = {
            "a": new MultiplicationInput_A(),
            "b": new MultiplicationInput_B()
        }
        this.output = {
            "result": new MultiplicationOutput_Result(),
        };
    }

    public static create(): Multiplication {
        return new Multiplication();
    }
    
}

class MultiplicationInput_A extends ResthopperParameter {

    public name: string = "A";
    public nickName: string = "A";
    public guid: string;
    public isOptional: boolean = false;
    public typeName: string = "value";

    public sources: string[] = [];

    constructor() {
        super();
        this.guid = newGuid();
    }
    
}

class MultiplicationInput_B extends ResthopperParameter {

    public name: string = "B";
    public nickName: string = "B";
    public guid: string;
    public isOptional: boolean = false;
    public typeName: string = "value";

    public sources: string[] = [];

    constructor() {
        super();
        this.guid = newGuid();
    }
    
}

class MultiplicationOutput_Result extends ResthopperParameter {

    public name: string = "Result";
    public nickName: string = "Result";

    constructor() {
        super();
        this.guid = newGuid();
    }

}