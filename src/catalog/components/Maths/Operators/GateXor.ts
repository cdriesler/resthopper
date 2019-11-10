import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class GateXor extends ResthopperComponent {

	public guid: string = "de4a0d86-2709-4564-935a-88bf4d40af89";
	public name: string = "GateXor";
	public category: string = "Maths";
	public subCategory: string = "Operators";
	public description: string = "Perform boolean exclusive disjunction (XOR gate).";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"A_A": GateXorInput_A_A,
		"B_B": GateXorInput_B_B,
	}

	public output:
	{
		"Result_R": GateXorOutput_Result_R,
	}

	constructor() {
		super();
		this.input = {
			"A_A": new GateXorInput_A_A(),
			"B_B": new GateXorInput_B_B(),
		}
		this.output = {
			"Result_R": new GateXorOutput_Result_R(),
		}
	}

}

class GateXorInput_A_A extends ResthopperParameter {

	public name: string = "A";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class GateXorInput_B_B extends ResthopperParameter {

	public name: string = "B";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class GateXorOutput_Result_R extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
