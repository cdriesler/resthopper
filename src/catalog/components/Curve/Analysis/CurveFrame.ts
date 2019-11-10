import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CurveFrame extends ResthopperComponent {

	public guid: string = "6b2a5853-07aa-4329-ba84-0a5d46b51dbd";
	public name: string = "CurveFrame";
	public category: string = "Curve";
	public subCategory: string = "Analysis";
	public description: string = "Get the curvature frame of a curve at a specified parameter.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"Curve_C": CurveFrameInput_Curve_C,
		"Parameter_t": CurveFrameInput_Parameter_t,
	}

	public output:
	{
		"Frame_F": CurveFrameOutput_Frame_F,
	}

	constructor() {
		super();
		this.input = {
			"Curve_C": new CurveFrameInput_Curve_C(),
			"Parameter_t": new CurveFrameInput_Parameter_t(),
		}
		this.output = {
			"Frame_F": new CurveFrameOutput_Frame_F(),
		}
	}

}

class CurveFrameInput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveFrameInput_Parameter_t extends ResthopperParameter {

	public name: string = "Parameter";
	public nickName: string = "t";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveFrameOutput_Frame_F extends ResthopperParameter {

	public name: string = "Frame";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
