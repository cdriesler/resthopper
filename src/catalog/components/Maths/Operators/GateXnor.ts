import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class GateXnor extends ResthopperComponent {

	public guid: string = "b6aedcac-bf43-42d4-899e-d763612f834d";
	public name: string = "GateXnor";
	public category: string = "Maths";
	public subCategory: string = "Operators";
	public description: string = "Perform boolean biconditional (XNOR gate).";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"A_A": GateXnorInput_A_A,
		"B_B": GateXnorInput_B_B,
	}

	public output:
	{
		"Result_R": GateXnorOutput_Result_R,
	}

	constructor() {
		super();
		this.input = {
			"A_A": new GateXnorInput_A_A(),
			"B_B": new GateXnorInput_B_B(),
		}
		this.output = {
			"Result_R": new GateXnorOutput_Result_R(),
		}
	}

}

class GateXnorInput_A_A extends ResthopperParameter {

	public name: string = "A";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class GateXnorInput_B_B extends ResthopperParameter {

	public name: string = "B";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class GateXnorOutput_Result_R extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
