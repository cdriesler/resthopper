import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Pi extends ResthopperComponent {

	public guid: string = "0d2ccfb3-9d41-4759-9452-da6a522c3eaa";
	public name: string = "Pi";
	public category: string = "Maths";
	public subCategory: string = "Util";
	public description: string = "Returns a factor of Pi.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Factor_N": PiInput_Factor_N,
	}

	public output:
	{
		"Output_y": PiOutput_Output_y,
	}

	constructor() {
		super();
		this.input = {
			"Factor_N": new PiInput_Factor_N(),
		}
		this.output = {
			"Output_y": new PiOutput_Output_y(),
		}
	}

}

class PiInput_Factor_N extends ResthopperParameter {

	public name: string = "Factor";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PiOutput_Output_y extends ResthopperParameter {

	public name: string = "Output";
	public nickName: string = "y";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
