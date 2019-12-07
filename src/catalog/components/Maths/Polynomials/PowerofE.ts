import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PowerofE extends ResthopperComponent {

	public guid: string = "c717f26f-e4a0-475c-8e1c-b8f77af1bc99";
	public name: string = "PowerofE";
	public nickName: string = "E";
	public category: string = "Maths";
	public subCategory: string = "Polynomials";
	public description: string = "Raise E to the power of N.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"value_x": PowerofEInput_value_x,
	}

	public output:
	{
		"result_y": PowerofEOutput_result_y,
	}

	constructor() {
		super();
		this.input = {
			"value_x": new PowerofEInput_value_x(),
		}
		this.output = {
			"result_y": new PowerofEOutput_result_y(),
		}
	}

}

class PowerofEInput_value_x extends ResthopperParameter {

	public name: string = "Value";
	public nickName: string = "x";
	public description: string = "Empty Generic Data parameter"
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PowerofEOutput_result_y extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "y";
	public description: string = "Empty Generic Data parameter"
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
