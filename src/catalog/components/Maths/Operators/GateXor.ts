import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class GateXor extends ResthopperComponent {

	public guid: string = "de4a0d86-2709-4564-935a-88bf4d40af89";
	public name: string = "Gate Xor";
	public nickName: string = "Xor";
	public category: string = "Maths";
	public subCategory: string = "Operators";
	public description: string = "Perform boolean exclusive disjunction (XOR gate).";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"a_a": GateXorInput_a_a,
		"b_b": GateXorInput_b_b,
	}

	public output:
	{
		"result_r": GateXorOutput_result_r,
	}

	constructor() {
		super();
		this.input = {
			"a_a": new GateXorInput_a_a(),
			"b_b": new GateXorInput_b_b(),
		}
		this.output = {
			"result_r": new GateXorOutput_result_r(),
		}
	}

}

class GateXorInput_a_a extends ResthopperParameter {

	public name: string = "A";
	public nickName: string = "A";
	public description: string = "Left hand boolean"
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class GateXorInput_b_b extends ResthopperParameter {

	public name: string = "B";
	public nickName: string = "B";
	public description: string = "Right hand boolean"
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class GateXorOutput_result_r extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public description: string = "Resulting value"
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
