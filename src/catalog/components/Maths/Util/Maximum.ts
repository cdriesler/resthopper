import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Maximum extends ResthopperComponent {

	public guid: string = "0d1e2027-f153-460d-84c0-f9af431b08cb";
	public name: string = "Maximum";
	public category: string = "Maths";
	public subCategory: string = "Util";
	public description: string = "Return the greater of two items.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"A_A": MaximumInput_A_A,
		"B_B": MaximumInput_B_B,
	}

	public output:
	{
		"Result_R": MaximumOutput_Result_R,
	}

	constructor() {
		super();
		this.input = {
			"A_A": new MaximumInput_A_A(),
			"B_B": new MaximumInput_B_B(),
		}
		this.output = {
			"Result_R": new MaximumOutput_Result_R(),
		}
	}

}

class MaximumInput_A_A extends ResthopperParameter {

	public name: string = "A";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MaximumInput_B_B extends ResthopperParameter {

	public name: string = "B";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MaximumOutput_Result_R extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
