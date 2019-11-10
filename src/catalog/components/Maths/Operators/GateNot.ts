import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class GateNot extends ResthopperComponent {

	public guid: string = "cb2c7d3c-41b4-4c6d-a6bd-9235bd2851bb";
	public name: string = "GateNot";
	public category: string = "Maths";
	public subCategory: string = "Operators";
	public description: string = "Perform boolean negation (NOT gate).";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"A_A": GateNotInput_A_A,
	}

	public output:
	{
		"Result_R": GateNotOutput_Result_R,
	}

	constructor() {
		super();
		this.input = {
			"A_A": new GateNotInput_A_A(),
		}
		this.output = {
			"Result_R": new GateNotOutput_Result_R(),
		}
	}

}

class GateNotInput_A_A extends ResthopperParameter {

	public name: string = "A";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class GateNotOutput_Result_R extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
