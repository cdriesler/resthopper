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

	public library: string = "Curve Components";

	public input:
	{
		"Curve_C": EvaluateCurveInput_Curve_C,
		"Parameter_t": EvaluateCurveInput_Parameter_t,
	}

	public output:
	{
		"Point_P": EvaluateCurveOutput_Point_P,
		"Tangent_T": EvaluateCurveOutput_Tangent_T,
		"Angle_A": EvaluateCurveOutput_Angle_A,
	}

	constructor() {
		super();
		this.input = {
			"Curve_C": new EvaluateCurveInput_Curve_C(),
			"Parameter_t": new EvaluateCurveInput_Parameter_t(),
		}
		this.output = {
			"Point_P": new EvaluateCurveOutput_Point_P(),
			"Tangent_T": new EvaluateCurveOutput_Tangent_T(),
			"Angle_A": new EvaluateCurveOutput_Angle_A(),
		}
	}

}

class EvaluateCurveInput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EvaluateCurveInput_Parameter_t extends ResthopperParameter {

	public name: string = "Parameter";
	public nickName: string = "t";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EvaluateCurveOutput_Point_P extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EvaluateCurveOutput_Tangent_T extends ResthopperParameter {

	public name: string = "Tangent";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EvaluateCurveOutput_Angle_A extends ResthopperParameter {

	public name: string = "Angle";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
