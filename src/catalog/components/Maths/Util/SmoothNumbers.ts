import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SmoothNumbers extends ResthopperComponent {

	public guid: string = "5b424e1c-d061-43cd-8c20-db84564b0502";
	public name: string = "SmoothNumbers";
	public category: string = "Maths";
	public subCategory: string = "Util";
	public description: string = "Smooth out changing numbers over time";
	public isObsolete: boolean = false;

	public library: string = "Grasshopper";

	public input:
	{
		"numbers_n": SmoothNumbersInput_numbers_n,
	}

	public output:
	{
		"numbers_n": SmoothNumbersOutput_numbers_n,
	}

	constructor() {
		super();
		this.input = {
			"numbers_n": new SmoothNumbersInput_numbers_n(),
		}
		this.output = {
			"numbers_n": new SmoothNumbersOutput_numbers_n(),
		}
	}

}

class SmoothNumbersInput_numbers_n extends ResthopperParameter {

	public name: string = "Numbers";
	public nickName: string = "N";
	public isOptional: boolean = true;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SmoothNumbersOutput_numbers_n extends ResthopperParameter {

	public name: string = "Numbers";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
