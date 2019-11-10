import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SimplifyCurve extends ResthopperComponent {

	public guid: string = "922dc7e5-0f0e-4c21-ae4b-f6a8654e63f6";
	public name: string = "SimplifyCurve";
	public category: string = "Curve";
	public subCategory: string = "Util";
	public description: string = "Simplify a curve.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"curve_c": SimplifyCurveInput_curve_c,
		"tolerance_t": SimplifyCurveInput_tolerance_t,
		"angletolerance_a": SimplifyCurveInput_angletolerance_a,
	}

	public output:
	{
		"curve_c": SimplifyCurveOutput_curve_c,
		"simplified_s": SimplifyCurveOutput_simplified_s,
	}

	constructor() {
		super();
		this.input = {
			"curve_c": new SimplifyCurveInput_curve_c(),
			"tolerance_t": new SimplifyCurveInput_tolerance_t(),
			"angletolerance_a": new SimplifyCurveInput_angletolerance_a(),
		}
		this.output = {
			"curve_c": new SimplifyCurveOutput_curve_c(),
			"simplified_s": new SimplifyCurveOutput_simplified_s(),
		}
	}

}

class SimplifyCurveInput_curve_c extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SimplifyCurveInput_tolerance_t extends ResthopperParameter {

	public name: string = "Tolerance";
	public nickName: string = "t";
	public isOptional: boolean = true;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SimplifyCurveInput_angletolerance_a extends ResthopperParameter {

	public name: string = "AngleTolerance";
	public nickName: string = "a";
	public isOptional: boolean = true;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SimplifyCurveOutput_curve_c extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SimplifyCurveOutput_simplified_s extends ResthopperParameter {

	public name: string = "Simplified";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
