import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Minimum extends ResthopperComponent {

	public guid: string = "57308b30-772d-4919-ac67-e86c18f3a996";
	public name: string = "Minimum";
	public category: string = "Maths";
	public subCategory: string = "Util";
	public description: string = "Return the lesser of two items.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"a_a": MinimumInput_a_a,
		"b_b": MinimumInput_b_b,
	}

	public output:
	{
		"result_r": MinimumOutput_result_r,
	}

	constructor() {
		super();
		this.input = {
			"a_a": new MinimumInput_a_a(),
			"b_b": new MinimumInput_b_b(),
		}
		this.output = {
			"result_r": new MinimumOutput_result_r(),
		}
	}

}

class MinimumInput_a_a extends ResthopperParameter {

	public name: string = "A";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MinimumInput_b_b extends ResthopperParameter {

	public name: string = "B";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MinimumOutput_result_r extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
