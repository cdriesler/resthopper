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
		"Numbers_N": SmoothNumbersInput_Numbers_N,
	}

	public output:
	{
		"Numbers_N": SmoothNumbersOutput_Numbers_N,
	}

	constructor() {
		super();
		this.input = {
			"Numbers_N": new SmoothNumbersInput_Numbers_N(),
		}
		this.output = {
			"Numbers_N": new SmoothNumbersOutput_Numbers_N(),
		}
	}

}

class SmoothNumbersInput_Numbers_N extends ResthopperParameter {

	public name: string = "Numbers";
	public nickName: string = "N";
	public isOptional: boolean = true;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SmoothNumbersOutput_Numbers_N extends ResthopperParameter {

	public name: string = "Numbers";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
