import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PowerofTwo extends ResthopperComponent {

	public guid: string = "7a1e5fd7-b7da-4244-a261-f1da66614992";
	public name: string = "Power of 2";
	public nickName: string = "2";
	public category: string = "Maths";
	public subCategory: string = "Polynomials";
	public description: string = "Raise 2 to the power of N.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"value_x": PowerofTwoInput_value_x,
	}

	public output:
	{
		"result_y": PowerofTwoOutput_result_y,
	}

	constructor() {
		super();
		this.input = {
			"value_x": new PowerofTwoInput_value_x(),
		}
		this.output = {
			"result_y": new PowerofTwoOutput_result_y(),
		}
	}

}

class PowerofTwoInput_value_x extends ResthopperParameter {

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

class PowerofTwoOutput_result_y extends ResthopperParameter {

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
