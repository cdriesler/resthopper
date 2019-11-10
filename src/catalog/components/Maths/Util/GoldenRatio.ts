import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class GoldenRatio extends ResthopperComponent {

	public guid: string = "cb22d3ed-93d8-4629-bdf2-c0c7c25afd2c";
	public name: string = "GoldenRatio";
	public category: string = "Maths";
	public subCategory: string = "Util";
	public description: string = "Returns a factor of the golden ratio (Phi).";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Factor_N": GoldenRatioInput_Factor_N,
	}

	public output:
	{
		"Output_y": GoldenRatioOutput_Output_y,
	}

	constructor() {
		super();
		this.input = {
			"Factor_N": new GoldenRatioInput_Factor_N(),
		}
		this.output = {
			"Output_y": new GoldenRatioOutput_Output_y(),
		}
	}

}

class GoldenRatioInput_Factor_N extends ResthopperParameter {

	public name: string = "Factor";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class GoldenRatioOutput_Output_y extends ResthopperParameter {

	public name: string = "Output";
	public nickName: string = "y";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
