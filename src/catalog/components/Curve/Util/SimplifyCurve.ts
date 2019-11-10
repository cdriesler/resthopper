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
		"Curve_C": SimplifyCurveInput_Curve_C,
		"Tolerance_t": SimplifyCurveInput_Tolerance_t,
		"AngleTolerance_a": SimplifyCurveInput_AngleTolerance_a,
	}

	public output:
	{
		"Curve_C": SimplifyCurveOutput_Curve_C,
		"Simplified_S": SimplifyCurveOutput_Simplified_S,
	}

	constructor() {
		super();
		this.input = {
			"Curve_C": new SimplifyCurveInput_Curve_C(),
			"Tolerance_t": new SimplifyCurveInput_Tolerance_t(),
			"AngleTolerance_a": new SimplifyCurveInput_AngleTolerance_a(),
		}
		this.output = {
			"Curve_C": new SimplifyCurveOutput_Curve_C(),
			"Simplified_S": new SimplifyCurveOutput_Simplified_S(),
		}
	}

}

class SimplifyCurveInput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SimplifyCurveInput_Tolerance_t extends ResthopperParameter {

	public name: string = "Tolerance";
	public nickName: string = "t";
	public isOptional: boolean = true;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SimplifyCurveInput_AngleTolerance_a extends ResthopperParameter {

	public name: string = "AngleTolerance";
	public nickName: string = "a";
	public isOptional: boolean = true;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SimplifyCurveOutput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SimplifyCurveOutput_Simplified_S extends ResthopperParameter {

	public name: string = "Simplified";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
