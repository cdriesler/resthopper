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
		"A_A": PowerInput_A_A,
		"B_B": PowerInput_B_B,
	}

	public output:
	{
		"Result_R": PowerOutput_Result_R,
	}

	constructor() {
		super();
		this.input = {
			"A_A": new PowerInput_A_A(),
			"B_B": new PowerInput_B_B(),
		}
		this.output = {
			"Result_R": new PowerOutput_Result_R(),
		}
	}

}

class PowerInput_A_A extends ResthopperParameter {

	public name: string = "A";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PowerInput_B_B extends ResthopperParameter {

	public name: string = "B";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PowerOutput_Result_R extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
