import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CurveMiddle extends ResthopperComponent {

	public guid: string = "ccc7b468-e743-4049-891f-299432545898";
	public name: string = "CurveMiddle";
	public category: string = "Curve";
	public subCategory: string = "Analysis";
	public description: string = "Get the point in the middle of a curve";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"curve_c": CurveMiddleInput_curve_c,
	}

	public output:
	{
		"midpoint_m": CurveMiddleOutput_midpoint_m,
	}

	constructor() {
		super();
		this.input = {
			"curve_c": new CurveMiddleInput_curve_c(),
		}
		this.output = {
			"midpoint_m": new CurveMiddleOutput_midpoint_m(),
		}
	}

}

class CurveMiddleInput_curve_c extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveMiddleOutput_midpoint_m extends ResthopperParameter {

	public name: string = "Midpoint";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
