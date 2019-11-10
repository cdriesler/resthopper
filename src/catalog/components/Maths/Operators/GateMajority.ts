import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class GateMajority extends ResthopperComponent {

	public guid: string = "78669f9c-4fea-44fd-ab12-2a69eeec58de";
	public name: string = "GateMajority";
	public category: string = "Maths";
	public subCategory: string = "Operators";
	public description: string = "Calculates the majority vote among three booleans.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"A_A": GateMajorityInput_A_A,
		"B_B": GateMajorityInput_B_B,
		"C_C": GateMajorityInput_C_C,
	}

	public output:
	{
		"Result_R": GateMajorityOutput_Result_R,
	}

	constructor() {
		super();
		this.input = {
			"A_A": new GateMajorityInput_A_A(),
			"B_B": new GateMajorityInput_B_B(),
			"C_C": new GateMajorityInput_C_C(),
		}
		this.output = {
			"Result_R": new GateMajorityOutput_Result_R(),
		}
	}

}

class GateMajorityInput_A_A extends ResthopperParameter {

	public name: string = "A";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class GateMajorityInput_B_B extends ResthopperParameter {

	public name: string = "B";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class GateMajorityInput_C_C extends ResthopperParameter {

	public name: string = "C";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class GateMajorityOutput_Result_R extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
