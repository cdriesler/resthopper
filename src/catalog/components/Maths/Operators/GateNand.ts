import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class GateNand extends ResthopperComponent {

	public guid: string = "5ca5de6b-bc71-46c4-a8f7-7f30d7040acb";
	public name: string = "GateNand";
	public category: string = "Maths";
	public subCategory: string = "Operators";
	public description: string = "Perform boolean alternative denial (NAND gate).";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"a_a": GateNandInput_a_a,
		"b_b": GateNandInput_b_b,
	}

	public output:
	{
		"result_r": GateNandOutput_result_r,
	}

	constructor() {
		super();
		this.input = {
			"a_a": new GateNandInput_a_a(),
			"b_b": new GateNandInput_b_b(),
		}
		this.output = {
			"result_r": new GateNandOutput_result_r(),
		}
	}

}

class GateNandInput_a_a extends ResthopperParameter {

	public name: string = "A";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class GateNandInput_b_b extends ResthopperParameter {

	public name: string = "B";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class GateNandOutput_result_r extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
