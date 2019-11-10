import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Negative extends ResthopperComponent {

	public guid: string = "a3371040-e552-4bc8-b0ff-10a840258e88";
	public name: string = "Negative";
	public category: string = "Maths";
	public subCategory: string = "Operators";
	public description: string = "Compute the negative of a value.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Value_x": NegativeInput_Value_x,
	}

	public output:
	{
		"Result_y": NegativeOutput_Result_y,
	}

	constructor() {
		super();
		this.input = {
			"Value_x": new NegativeInput_Value_x(),
		}
		this.output = {
			"Result_y": new NegativeOutput_Result_y(),
		}
	}

}

class NegativeInput_Value_x extends ResthopperParameter {

	public name: string = "Value";
	public nickName: string = "x";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class NegativeOutput_Result_y extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "y";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
