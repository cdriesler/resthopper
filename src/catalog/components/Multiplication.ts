import ResthopperComponent from '../../models/ResthopperComponent';
import ResthopperParameter from '../../models/ResthopperParameter';
import { newGuid } from '../../utils/Guid';

export class Multiplication extends ResthopperComponent {

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
    public output = 
    {
        
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