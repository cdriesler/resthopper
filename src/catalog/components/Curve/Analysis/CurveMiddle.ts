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
		"Curve_C": CurveMiddleInput_Curve_C,
	}

	public output:
	{
		"Midpoint_M": CurveMiddleOutput_Midpoint_M,
	}

	constructor() {
		super();
		this.input = {
			"Curve_C": new CurveMiddleInput_Curve_C(),
		}
		this.output = {
			"Midpoint_M": new CurveMiddleOutput_Midpoint_M(),
		}
	}

}

class CurveMiddleInput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveMiddleOutput_Midpoint_M extends ResthopperParameter {

	public name: string = "Midpoint";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
