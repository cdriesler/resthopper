import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Power extends ResthopperComponent {

	public guid: string = "78fed580-851b-46fe-af2f-6519a9d378e0";
	public name: string = "Power";
	public category: string = "Maths";
	public subCategory: string = "Operators";
	public description: string = "Raise a value to a power.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"a_a": PowerInput_a_a,
		"b_b": PowerInput_b_b,
	}

	public output:
	{
		"result_r": PowerOutput_result_r,
	}

	constructor() {
		super();
		this.input = {
			"a_a": new PowerInput_a_a(),
			"b_b": new PowerInput_b_b(),
		}
		this.output = {
			"result_r": new PowerOutput_result_r(),
		}
	}

}

class PowerInput_a_a extends ResthopperParameter {

	public name: string = "A";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PowerInput_b_b extends ResthopperParameter {

	public name: string = "B";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PowerOutput_result_r extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
