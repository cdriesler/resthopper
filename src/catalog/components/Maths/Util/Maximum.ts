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
		"a_a": MaximumInput_a_a,
		"b_b": MaximumInput_b_b,
	}

	public output:
	{
		"result_r": MaximumOutput_result_r,
	}

	constructor() {
		super();
		this.input = {
			"a_a": new MaximumInput_a_a(),
			"b_b": new MaximumInput_b_b(),
		}
		this.output = {
			"result_r": new MaximumOutput_result_r(),
		}
	}

}

class MaximumInput_a_a extends ResthopperParameter {

	public name: string = "A";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MaximumInput_b_b extends ResthopperParameter {

	public name: string = "B";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MaximumOutput_result_r extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
