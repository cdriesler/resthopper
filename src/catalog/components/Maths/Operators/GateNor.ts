import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class GateNor extends ResthopperComponent {

	public guid: string = "548177c2-d1db-4172-b667-bec979e2d38b";
	public name: string = "GateNor";
	public category: string = "Maths";
	public subCategory: string = "Operators";
	public description: string = "Perform boolean joint denial (NOR gate).";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"A_A": GateNorInput_A_A,
		"B_B": GateNorInput_B_B,
	}

	public output:
	{
		"Result_R": GateNorOutput_Result_R,
	}

	constructor() {
		super();
		this.input = {
			"A_A": new GateNorInput_A_A(),
			"B_B": new GateNorInput_B_B(),
		}
		this.output = {
			"Result_R": new GateNorOutput_Result_R(),
		}
	}

}

class GateNorInput_A_A extends ResthopperParameter {

	public name: string = "A";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class GateNorInput_B_B extends ResthopperParameter {

	public name: string = "B";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class GateNorOutput_Result_R extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
