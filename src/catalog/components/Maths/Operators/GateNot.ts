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
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"a_a": GateNotInput_a_a,
	}

	public output:
	{
		"result_r": GateNotOutput_result_r,
	}

	constructor() {
		super();
		this.input = {
			"a_a": new GateNotInput_a_a(),
		}
		this.output = {
			"result_r": new GateNotOutput_result_r(),
		}
	}

}

class GateNotInput_a_a extends ResthopperParameter {

	public name: string = "A";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class GateNotOutput_result_r extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
