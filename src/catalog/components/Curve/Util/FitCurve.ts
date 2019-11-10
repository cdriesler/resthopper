import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class FitCurve extends ResthopperComponent {

	public guid: string = "a3f9f19e-3e6c-4ac7-97c3-946de32c3e8e";
	public name: string = "FitCurve";
	public category: string = "Curve";
	public subCategory: string = "Util";
	public description: string = "Fit a curve along another curve.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"curve_c": FitCurveInput_curve_c,
		"degree_d": FitCurveInput_degree_d,
		"tolerance_ft": FitCurveInput_tolerance_ft,
	}

	public output:
	{
		"curve_c": FitCurveOutput_curve_c,
	}

	constructor() {
		super();
		this.input = {
			"curve_c": new FitCurveInput_curve_c(),
			"degree_d": new FitCurveInput_degree_d(),
			"tolerance_ft": new FitCurveInput_tolerance_ft(),
		}
		this.output = {
			"curve_c": new FitCurveOutput_curve_c(),
		}
	}

}

class FitCurveInput_curve_c extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FitCurveInput_degree_d extends ResthopperParameter {

	public name: string = "Degree";
	public nickName: string = "D";
	public isOptional: boolean = true;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FitCurveInput_tolerance_ft extends ResthopperParameter {

	public name: string = "Tolerance";
	public nickName: string = "Ft";
	public isOptional: boolean = true;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FitCurveOutput_curve_c extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
