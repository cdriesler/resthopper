import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class GateXnor extends ResthopperComponent {

	public guid: string = "b6aedcac-bf43-42d4-899e-d763612f834d";
	public name: string = "GateXnor";
	public nickName: string = "Xnor";
	public category: string = "Maths";
	public subCategory: string = "Operators";
	public description: string = "Perform boolean biconditional (XNOR gate).";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"a_a": GateXnorInput_a_a,
		"b_b": GateXnorInput_b_b,
	}

	public output:
	{
		"result_r": GateXnorOutput_result_r,
	}

	constructor() {
		super();
		this.input = {
			"a_a": new GateXnorInput_a_a(),
			"b_b": new GateXnorInput_b_b(),
		}
		this.output = {
			"result_r": new GateXnorOutput_result_r(),
		}
	}

}

class GateXnorInput_a_a extends ResthopperParameter {

	public name: string = "A";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class GateXnorInput_b_b extends ResthopperParameter {

	public name: string = "B";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class GateXnorOutput_result_r extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
