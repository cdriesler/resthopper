import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class LengthParameter extends ResthopperComponent {

	public guid: string = "a1c16251-74f0-400f-9e7c-5e379d739963";
	public name: string = "LengthParameter";
	public category: string = "Curve";
	public subCategory: string = "Analysis";
	public description: string = "Measure the length of a curve to and from a parameter.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Curve_C": LengthParameterInput_Curve_C,
		"Parameter_P": LengthParameterInput_Parameter_P,
	}

	public output:
	{
		"Length_L": LengthParameterOutput_Length_L,
	}

	constructor() {
		super();
		this.input = {
			"Curve_C": new LengthParameterInput_Curve_C(),
			"Parameter_P": new LengthParameterInput_Parameter_P(),
		}
		this.output = {
			"Length_L": new LengthParameterOutput_Length_L(),
		}
	}

}

class LengthParameterInput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LengthParameterInput_Parameter_P extends ResthopperParameter {

	public name: string = "Parameter";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LengthParameterOutput_Length_L extends ResthopperParameter {

	public name: string = "Length";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
