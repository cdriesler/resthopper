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
		"A_A": MinimumInput_A_A,
		"B_B": MinimumInput_B_B,
	}

	public output:
	{
		"Result_R": MinimumOutput_Result_R,
	}

	constructor() {
		super();
		this.input = {
			"A_A": new MinimumInput_A_A(),
			"B_B": new MinimumInput_B_B(),
		}
		this.output = {
			"Result_R": new MinimumOutput_Result_R(),
		}
	}

}

class MinimumInput_A_A extends ResthopperParameter {

	public name: string = "A";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MinimumInput_B_B extends ResthopperParameter {

	public name: string = "B";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MinimumOutput_Result_R extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
