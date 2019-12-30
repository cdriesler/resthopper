import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CurveFrame extends ResthopperComponent {

	public guid: string = "6b2a5853-07aa-4329-ba84-0a5d46b51dbd";
	public name: string = "Curve Frame";
	public nickName: string = "Frame";
	public category: string = "Curve";
	public subCategory: string = "Analysis";
	public description: string = "Get the curvature frame of a curve at a specified parameter.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"curve_c": CurveFrameInput_curve_c,
		"parameter_t": CurveFrameInput_parameter_t,
	}

	public output:
	{
		"frame_f": CurveFrameOutput_frame_f,
	}

	constructor() {
		super();
		this.input = {
			"curve_c": new CurveFrameInput_curve_c(),
			"parameter_t": new CurveFrameInput_parameter_t(),
		}
		this.output = {
			"frame_f": new CurveFrameOutput_frame_f(),
		}
	}

}

class CurveFrameInput_curve_c extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public description: string = "Curve to evaluate"
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveFrameInput_parameter_t extends ResthopperParameter {

	public name: string = "Parameter";
	public nickName: string = "t";
	public description: string = "Parameter on curve domain to evaluate"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveFrameOutput_frame_f extends ResthopperParameter {

	public name: string = "Frame";
	public nickName: string = "F";
	public description: string = "Curve frame at {t}"
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
