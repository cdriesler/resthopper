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

	public library: string = "Curve Components";

	public input:
	{
		"Curve_C": CurveDepthInput_Curve_C,
		"Minimum_Min": CurveDepthInput_Minimum_Min,
		"Maximum_Max": CurveDepthInput_Maximum_Max,
	}

	public output:
	{
		"MinimumParameter_tMin": CurveDepthOutput_MinimumParameter_tMin,
		"MinimumDepth_dMin": CurveDepthOutput_MinimumDepth_dMin,
		"MaximumParameter_tMax": CurveDepthOutput_MaximumParameter_tMax,
		"MaximumDepth_dMax": CurveDepthOutput_MaximumDepth_dMax,
	}

	constructor() {
		super();
		this.input = {
			"Curve_C": new CurveDepthInput_Curve_C(),
			"Minimum_Min": new CurveDepthInput_Minimum_Min(),
			"Maximum_Max": new CurveDepthInput_Maximum_Max(),
		}
		this.output = {
			"MinimumParameter_tMin": new CurveDepthOutput_MinimumParameter_tMin(),
			"MinimumDepth_dMin": new CurveDepthOutput_MinimumDepth_dMin(),
			"MaximumParameter_tMax": new CurveDepthOutput_MaximumParameter_tMax(),
			"MaximumDepth_dMax": new CurveDepthOutput_MaximumDepth_dMax(),
		}
	}

}

class CurveDepthInput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveDepthInput_Minimum_Min extends ResthopperParameter {

	public name: string = "Minimum";
	public nickName: string = "Min";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveDepthInput_Maximum_Max extends ResthopperParameter {

	public name: string = "Maximum";
	public nickName: string = "Max";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveDepthOutput_MinimumParameter_tMin extends ResthopperParameter {

	public name: string = "MinimumParameter";
	public nickName: string = "tMin";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveDepthOutput_MinimumDepth_dMin extends ResthopperParameter {

	public name: string = "MinimumDepth";
	public nickName: string = "dMin";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveDepthOutput_MaximumParameter_tMax extends ResthopperParameter {

	public name: string = "MaximumParameter";
	public nickName: string = "tMax";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveDepthOutput_MaximumDepth_dMax extends ResthopperParameter {

	public name: string = "MaximumDepth";
	public nickName: string = "dMax";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
