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
		"curve_c": EvaluateLengthInput_curve_c,
		"length_l": EvaluateLengthInput_length_l,
		"normalized_n": EvaluateLengthInput_normalized_n,
	}

	public output:
	{
		"point_p": EvaluateLengthOutput_point_p,
		"tangent_t": EvaluateLengthOutput_tangent_t,
		"parameter_t": EvaluateLengthOutput_parameter_t,
	}

	constructor() {
		super();
		this.input = {
			"curve_c": new EvaluateLengthInput_curve_c(),
			"length_l": new EvaluateLengthInput_length_l(),
			"normalized_n": new EvaluateLengthInput_normalized_n(),
		}
		this.output = {
			"point_p": new EvaluateLengthOutput_point_p(),
			"tangent_t": new EvaluateLengthOutput_tangent_t(),
			"parameter_t": new EvaluateLengthOutput_parameter_t(),
		}
	}

}

class EvaluateLengthInput_curve_c extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EvaluateLengthInput_length_l extends ResthopperParameter {

	public name: string = "Length";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EvaluateLengthInput_normalized_n extends ResthopperParameter {

	public name: string = "Normalized";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EvaluateLengthOutput_point_p extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EvaluateLengthOutput_tangent_t extends ResthopperParameter {

	public name: string = "Tangent";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EvaluateLengthOutput_parameter_t extends ResthopperParameter {

	public name: string = "Parameter";
	public nickName: string = "t";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
