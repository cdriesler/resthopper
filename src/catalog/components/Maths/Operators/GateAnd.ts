import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class GateAnd extends ResthopperComponent {

	public guid: string = "040f195d-0b4e-4fe0-901f-fedb2fd3db15";
	public name: string = "GateAnd";
	public nickName: string = "And";
	public category: string = "Maths";
	public subCategory: string = "Operators";
	public description: string = "Perform boolean conjunction (AND gate).";
	public isObsolete: boolean = false;
	public isVariable: boolean = true;

	public library: string = "Math Components";

	public input:
	{
		"a_a": GateAndInput_a_a,
		"b_b": GateAndInput_b_b,
	}

	public output:
	{
		"result_r": GateAndOutput_result_r,
	}

	constructor() {
		super();
		this.input = {
			"a_a": new GateAndInput_a_a(),
			"b_b": new GateAndInput_b_b(),
		}
		this.output = {
			"result_r": new GateAndOutput_result_r(),
		}
	}

}

class GateAndInput_a_a extends ResthopperParameter {

	public name: string = "A";
	public nickName: string = "A";
	public isOptional: boolean = true;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class GateAndInput_b_b extends ResthopperParameter {

	public name: string = "B";
	public nickName: string = "B";
	public isOptional: boolean = true;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class GateAndOutput_result_r extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
