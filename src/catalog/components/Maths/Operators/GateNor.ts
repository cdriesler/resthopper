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
		"a_a": GateNorInput_a_a,
		"b_b": GateNorInput_b_b,
	}

	public output:
	{
		"result_r": GateNorOutput_result_r,
	}

	constructor() {
		super();
		this.input = {
			"a_a": new GateNorInput_a_a(),
			"b_b": new GateNorInput_b_b(),
		}
		this.output = {
			"result_r": new GateNorOutput_result_r(),
		}
	}

}

class GateNorInput_a_a extends ResthopperParameter {

	public name: string = "A";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class GateNorInput_b_b extends ResthopperParameter {

	public name: string = "B";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class GateNorOutput_result_r extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
