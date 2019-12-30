import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Pi extends ResthopperComponent {

	public guid: string = "0d2ccfb3-9d41-4759-9452-da6a522c3eaa";
	public name: string = "Pi";
	public nickName: string = "Pi";
	public category: string = "Maths";
	public subCategory: string = "Util";
	public description: string = "Returns a factor of Pi.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"factor_n": PiInput_factor_n,
	}

	public output:
	{
		"output_y": PiOutput_output_y,
	}

	constructor() {
		super();
		this.input = {
			"factor_n": new PiInput_factor_n(),
		}
		this.output = {
			"output_y": new PiOutput_output_y(),
		}
	}

}

class PiInput_factor_n extends ResthopperParameter {

	public name: string = "Factor";
	public nickName: string = "N";
	public description: string = "Factor to be multiplied by Pi"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PiOutput_output_y extends ResthopperParameter {

	public name: string = "Output";
	public nickName: string = "y";
	public description: string = "Output value"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
