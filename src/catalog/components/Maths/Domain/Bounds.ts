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
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"numbers_n": BoundsInput_numbers_n,
	}

	public output:
	{
		"domain_i": BoundsOutput_domain_i,
	}

	constructor() {
		super();
		this.input = {
			"numbers_n": new BoundsInput_numbers_n(),
		}
		this.output = {
			"domain_i": new BoundsOutput_domain_i(),
		}
	}

}

class BoundsInput_numbers_n extends ResthopperParameter {

	public name: string = "Numbers";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BoundsOutput_domain_i extends ResthopperParameter {

	public name: string = "Domain";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Domain"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
