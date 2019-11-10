import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PowerofTwo extends ResthopperComponent {

	public guid: string = "7a1e5fd7-b7da-4244-a261-f1da66614992";
	public name: string = "Powerof2";
	public category: string = "Maths";
	public subCategory: string = "Polynomials";
	public description: string = "Raise 2 to the power of N.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Value_x": PowerofTwoInput_Value_x,
	}

	public output:
	{
		"Result_y": PowerofTwoOutput_Result_y,
	}

	constructor() {
		super();
		this.input = {
			"Value_x": new PowerofTwoInput_Value_x(),
		}
		this.output = {
			"Result_y": new PowerofTwoOutput_Result_y(),
		}
	}

}

class PowerofTwoInput_Value_x extends ResthopperParameter {

	public name: string = "Value";
	public nickName: string = "x";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PowerofTwoOutput_Result_y extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "y";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
