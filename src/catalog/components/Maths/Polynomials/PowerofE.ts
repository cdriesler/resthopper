import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PowerofE extends ResthopperComponent {

	public guid: string = "c717f26f-e4a0-475c-8e1c-b8f77af1bc99";
	public name: string = "PowerofE";
	public category: string = "Maths";
	public subCategory: string = "Polynomials";
	public description: string = "Raise E to the power of N.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Value_x": PowerofEInput_Value_x,
	}

	public output:
	{
		"Result_y": PowerofEOutput_Result_y,
	}

	constructor() {
		super();
		this.input = {
			"Value_x": new PowerofEInput_Value_x(),
		}
		this.output = {
			"Result_y": new PowerofEOutput_Result_y(),
		}
	}

}

class PowerofEInput_Value_x extends ResthopperParameter {

	public name: string = "Value";
	public nickName: string = "x";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PowerofEOutput_Result_y extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "y";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
