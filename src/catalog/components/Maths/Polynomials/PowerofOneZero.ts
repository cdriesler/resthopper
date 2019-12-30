import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PowerofOneZero extends ResthopperComponent {

	public guid: string = "2ebb82ef-1f90-4ac9-9a71-1fe0f4ef7044";
	public name: string = "Power of 10";
	public nickName: string = "10";
	public category: string = "Maths";
	public subCategory: string = "Polynomials";
	public description: string = "Raise 10 to the power of N.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"value_x": PowerofOneZeroInput_value_x,
	}

	public output:
	{
		"result_y": PowerofOneZeroOutput_result_y,
	}

	constructor() {
		super();
		this.input = {
			"value_x": new PowerofOneZeroInput_value_x(),
		}
		this.output = {
			"result_y": new PowerofOneZeroOutput_result_y(),
		}
	}

}

class PowerofOneZeroInput_value_x extends ResthopperParameter {

	public name: string = "Value";
	public nickName: string = "x";
	public description: string = "Input value"
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PowerofOneZeroOutput_result_y extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "y";
	public description: string = "Output value"
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
