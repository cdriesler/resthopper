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
		"a_a": GateOrInput_a_a,
		"b_b": GateOrInput_b_b,
	}

	public output:
	{
		"result_r": GateOrOutput_result_r,
	}

	constructor() {
		super();
		this.input = {
			"a_a": new GateOrInput_a_a(),
			"b_b": new GateOrInput_b_b(),
		}
		this.output = {
			"result_r": new GateOrOutput_result_r(),
		}
	}

}

class GateOrInput_a_a extends ResthopperParameter {

	public name: string = "A";
	public nickName: string = "A";
	public isOptional: boolean = true;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class GateOrInput_b_b extends ResthopperParameter {

	public name: string = "B";
	public nickName: string = "B";
	public isOptional: boolean = true;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class GateOrOutput_result_r extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
