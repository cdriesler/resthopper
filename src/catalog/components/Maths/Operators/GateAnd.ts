import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class GateAnd extends ResthopperComponent {

	public guid: string = "040f195d-0b4e-4fe0-901f-fedb2fd3db15";
	public name: string = "GateAnd";
	public category: string = "Maths";
	public subCategory: string = "Operators";
	public description: string = "Perform boolean conjunction (AND gate).";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"A_A": GateAndInput_A_A,
		"B_B": GateAndInput_B_B,
	}

	public output:
	{
		"Result_R": GateAndOutput_Result_R,
	}

	constructor() {
		super();
		this.input = {
			"A_A": new GateAndInput_A_A(),
			"B_B": new GateAndInput_B_B(),
		}
		this.output = {
			"Result_R": new GateAndOutput_Result_R(),
		}
	}

}

class GateAndInput_A_A extends ResthopperParameter {

	public name: string = "A";
	public nickName: string = "A";
	public isOptional: boolean = true;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class GateAndInput_B_B extends ResthopperParameter {

	public name: string = "B";
	public nickName: string = "B";
	public isOptional: boolean = true;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class GateAndOutput_Result_R extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
