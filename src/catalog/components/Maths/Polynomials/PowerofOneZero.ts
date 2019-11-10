import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PowerofOneZero extends ResthopperComponent {

	public guid: string = "2ebb82ef-1f90-4ac9-9a71-1fe0f4ef7044";
	public name: string = "Powerof10";
	public category: string = "Maths";
	public subCategory: string = "Polynomials";
	public description: string = "Raise 10 to the power of N.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Value_x": PowerofOneZeroInput_Value_x,
	}

	public output:
	{
		"Result_y": PowerofOneZeroOutput_Result_y,
	}

	constructor() {
		super();
		this.input = {
			"Value_x": new PowerofOneZeroInput_Value_x(),
		}
		this.output = {
			"Result_y": new PowerofOneZeroOutput_Result_y(),
		}
	}

}

class PowerofOneZeroInput_Value_x extends ResthopperParameter {

	public name: string = "Value";
	public nickName: string = "x";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PowerofOneZeroOutput_Result_y extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "y";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
