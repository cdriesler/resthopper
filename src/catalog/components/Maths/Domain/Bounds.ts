import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Bounds extends ResthopperComponent {

	public guid: string = "f44b92b0-3b5b-493a-86f4-fd7408c3daf3";
	public name: string = "Bounds";
	public category: string = "Maths";
	public subCategory: string = "Domain";
	public description: string = "Create a numeric domain which encompasses a list of numbers.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Numbers_N": BoundsInput_Numbers_N,
	}

	public output:
	{
		"Domain_I": BoundsOutput_Domain_I,
	}

	constructor() {
		super();
		this.input = {
			"Numbers_N": new BoundsInput_Numbers_N(),
		}
		this.output = {
			"Domain_I": new BoundsOutput_Domain_I(),
		}
	}

}

class BoundsInput_Numbers_N extends ResthopperParameter {

	public name: string = "Numbers";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BoundsOutput_Domain_I extends ResthopperParameter {

	public name: string = "Domain";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Domain;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
