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
		"A_A": GateNandInput_A_A,
		"B_B": GateNandInput_B_B,
	}

	public output:
	{
		"Result_R": GateNandOutput_Result_R,
	}

	constructor() {
		super();
		this.input = {
			"A_A": new GateNandInput_A_A(),
			"B_B": new GateNandInput_B_B(),
		}
		this.output = {
			"Result_R": new GateNandOutput_Result_R(),
		}
	}

}

class GateNandInput_A_A extends ResthopperParameter {

	public name: string = "A";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class GateNandInput_B_B extends ResthopperParameter {

	public name: string = "B";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class GateNandOutput_Result_R extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
