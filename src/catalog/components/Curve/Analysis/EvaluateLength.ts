import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class EvaluateLength extends ResthopperComponent {

	public guid: string = "6b021f56-b194-4210-b9a1-6cef3b7d0848";
	public name: string = "EvaluateLength";
	public category: string = "Curve";
	public subCategory: string = "Analysis";
	public description: string = "Evaluate a curve at a certain factor along its length. Length factors can be supplied both in curve units and normalized units. Change the [N] parameter to toggle between the two modes.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Curve_C": EvaluateLengthInput_Curve_C,
		"Length_L": EvaluateLengthInput_Length_L,
		"Normalized_N": EvaluateLengthInput_Normalized_N,
	}

	public output:
	{
		"Point_P": EvaluateLengthOutput_Point_P,
		"Tangent_T": EvaluateLengthOutput_Tangent_T,
		"Parameter_t": EvaluateLengthOutput_Parameter_t,
	}

	constructor() {
		super();
		this.input = {
			"Curve_C": new EvaluateLengthInput_Curve_C(),
			"Length_L": new EvaluateLengthInput_Length_L(),
			"Normalized_N": new EvaluateLengthInput_Normalized_N(),
		}
		this.output = {
			"Point_P": new EvaluateLengthOutput_Point_P(),
			"Tangent_T": new EvaluateLengthOutput_Tangent_T(),
			"Parameter_t": new EvaluateLengthOutput_Parameter_t(),
		}
	}

}

class EvaluateLengthInput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EvaluateLengthInput_Length_L extends ResthopperParameter {

	public name: string = "Length";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EvaluateLengthInput_Normalized_N extends ResthopperParameter {

	public name: string = "Normalized";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EvaluateLengthOutput_Point_P extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EvaluateLengthOutput_Tangent_T extends ResthopperParameter {

	public name: string = "Tangent";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EvaluateLengthOutput_Parameter_t extends ResthopperParameter {

	public name: string = "Parameter";
	public nickName: string = "t";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
