import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class GateOr extends ResthopperComponent {

	public guid: string = "5cad70f9-5a53-4c5c-a782-54a479b4abe3";
	public name: string = "GateOr";
	public category: string = "Maths";
	public subCategory: string = "Operators";
	public description: string = "Perform boolean disjunction (OR gate).";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"A_A": GateOrInput_A_A,
		"B_B": GateOrInput_B_B,
	}

	public output:
	{
		"Result_R": GateOrOutput_Result_R,
	}

	constructor() {
		super();
		this.input = {
			"A_A": new GateOrInput_A_A(),
			"B_B": new GateOrInput_B_B(),
		}
		this.output = {
			"Result_R": new GateOrOutput_Result_R(),
		}
	}

}

class GateOrInput_A_A extends ResthopperParameter {

	public name: string = "A";
	public nickName: string = "A";
	public isOptional: boolean = true;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class GateOrInput_B_B extends ResthopperParameter {

	public name: string = "B";
	public nickName: string = "B";
	public isOptional: boolean = true;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class GateOrOutput_Result_R extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
