import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class EvaluateCurve extends ResthopperComponent {

	public guid: string = "fc6979e4-7e91-4508-8e05-37c680779751";
	public name: string = "EvaluateCurve";
	public category: string = "Curve";
	public subCategory: string = "Analysis";
	public description: string = "Evaluate a curve at the specified parameter.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"curve_c": EvaluateCurveInput_curve_c,
		"parameter_t": EvaluateCurveInput_parameter_t,
	}

	public output:
	{
		"point_p": EvaluateCurveOutput_point_p,
		"tangent_t": EvaluateCurveOutput_tangent_t,
		"angle_a": EvaluateCurveOutput_angle_a,
	}

	constructor() {
		super();
		this.input = {
			"curve_c": new EvaluateCurveInput_curve_c(),
			"parameter_t": new EvaluateCurveInput_parameter_t(),
		}
		this.output = {
			"point_p": new EvaluateCurveOutput_point_p(),
			"tangent_t": new EvaluateCurveOutput_tangent_t(),
			"angle_a": new EvaluateCurveOutput_angle_a(),
		}
	}

}

class EvaluateCurveInput_curve_c extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EvaluateCurveInput_parameter_t extends ResthopperParameter {

	public name: string = "Parameter";
	public nickName: string = "t";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EvaluateCurveOutput_point_p extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EvaluateCurveOutput_tangent_t extends ResthopperParameter {

	public name: string = "Tangent";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Vector"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EvaluateCurveOutput_angle_a extends ResthopperParameter {

	public name: string = "Angle";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
