import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CurveDepth extends ResthopperComponent {

	public guid: string = "a583f722-240a-4fc9-aa1d-021720a4516a";
	public name: string = "CurveDepth";
	public category: string = "Curve";
	public subCategory: string = "Analysis";
	public description: string = "Measure the depth of a curve.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"curve_c": CurveDepthInput_curve_c,
		"minimum_min": CurveDepthInput_minimum_min,
		"maximum_max": CurveDepthInput_maximum_max,
	}

	public output:
	{
		"minimumparameter_tmin": CurveDepthOutput_minimumparameter_tmin,
		"minimumdepth_dmin": CurveDepthOutput_minimumdepth_dmin,
		"maximumparameter_tmax": CurveDepthOutput_maximumparameter_tmax,
		"maximumdepth_dmax": CurveDepthOutput_maximumdepth_dmax,
	}

	constructor() {
		super();
		this.input = {
			"curve_c": new CurveDepthInput_curve_c(),
			"minimum_min": new CurveDepthInput_minimum_min(),
			"maximum_max": new CurveDepthInput_maximum_max(),
		}
		this.output = {
			"minimumparameter_tmin": new CurveDepthOutput_minimumparameter_tmin(),
			"minimumdepth_dmin": new CurveDepthOutput_minimumdepth_dmin(),
			"maximumparameter_tmax": new CurveDepthOutput_maximumparameter_tmax(),
			"maximumdepth_dmax": new CurveDepthOutput_maximumdepth_dmax(),
		}
	}

}

class CurveDepthInput_curve_c extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveDepthInput_minimum_min extends ResthopperParameter {

	public name: string = "Minimum";
	public nickName: string = "Min";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveDepthInput_maximum_max extends ResthopperParameter {

	public name: string = "Maximum";
	public nickName: string = "Max";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveDepthOutput_minimumparameter_tmin extends ResthopperParameter {

	public name: string = "MinimumParameter";
	public nickName: string = "tMin";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveDepthOutput_minimumdepth_dmin extends ResthopperParameter {

	public name: string = "MinimumDepth";
	public nickName: string = "dMin";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveDepthOutput_maximumparameter_tmax extends ResthopperParameter {

	public name: string = "MaximumParameter";
	public nickName: string = "tMax";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveDepthOutput_maximumdepth_dmax extends ResthopperParameter {

	public name: string = "MaximumDepth";
	public nickName: string = "dMax";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
