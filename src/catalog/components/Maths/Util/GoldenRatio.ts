import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class GoldenRatio extends ResthopperComponent {

	public guid: string = "cb22d3ed-93d8-4629-bdf2-c0c7c25afd2c";
	public name: string = "GoldenRatio";
	public nickName: string = "Phi";
	public category: string = "Maths";
	public subCategory: string = "Util";
	public description: string = "Returns a factor of the golden ratio (Phi).";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"factor_n": GoldenRatioInput_factor_n,
	}

	public output:
	{
		"output_y": GoldenRatioOutput_output_y,
	}

	constructor() {
		super();
		this.input = {
			"factor_n": new GoldenRatioInput_factor_n(),
		}
		this.output = {
			"output_y": new GoldenRatioOutput_output_y(),
		}
	}

}

class GoldenRatioInput_factor_n extends ResthopperParameter {

	public name: string = "Factor";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class GoldenRatioOutput_output_y extends ResthopperParameter {

	public name: string = "Output";
	public nickName: string = "y";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
