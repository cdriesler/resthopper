import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Naturallogarithm extends ResthopperComponent {

	public guid: string = "b6cac37c-21b9-46c6-bd0d-17ff67796578";
	public name: string = "Natural logarithm";
	public nickName: string = "E";
	public category: string = "Maths";
	public subCategory: string = "Util";
	public description: string = "Returns a factor of the natural number (e).";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"factor_n": NaturallogarithmInput_factor_n,
	}

	public output:
	{
		"output_y": NaturallogarithmOutput_output_y,
	}

	constructor() {
		super();
		this.input = {
			"factor_n": new NaturallogarithmInput_factor_n(),
		}
		this.output = {
			"output_y": new NaturallogarithmOutput_output_y(),
		}
	}

}

class NaturallogarithmInput_factor_n extends ResthopperParameter {

	public name: string = "Factor";
	public nickName: string = "N";
	public description: string = "Factor to be multiplied by e"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class NaturallogarithmOutput_output_y extends ResthopperParameter {

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
