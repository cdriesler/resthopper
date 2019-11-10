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
		"a_a": GateMajorityInput_a_a,
		"b_b": GateMajorityInput_b_b,
		"c_c": GateMajorityInput_c_c,
	}

	public output:
	{
		"result_r": GateMajorityOutput_result_r,
	}

	constructor() {
		super();
		this.input = {
			"a_a": new GateMajorityInput_a_a(),
			"b_b": new GateMajorityInput_b_b(),
			"c_c": new GateMajorityInput_c_c(),
		}
		this.output = {
			"result_r": new GateMajorityOutput_result_r(),
		}
	}

}

class GateMajorityInput_a_a extends ResthopperParameter {

	public name: string = "A";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class GateMajorityInput_b_b extends ResthopperParameter {

	public name: string = "B";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class GateMajorityInput_c_c extends ResthopperParameter {

	public name: string = "C";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class GateMajorityOutput_result_r extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
