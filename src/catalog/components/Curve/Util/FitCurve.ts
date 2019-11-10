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

	public library: string = "Curve Components";

	public input:
	{
		"Curve_C": FitCurveInput_Curve_C,
		"Degree_D": FitCurveInput_Degree_D,
		"Tolerance_Ft": FitCurveInput_Tolerance_Ft,
	}

	public output:
	{
		"Curve_C": FitCurveOutput_Curve_C,
	}

	constructor() {
		super();
		this.input = {
			"Curve_C": new FitCurveInput_Curve_C(),
			"Degree_D": new FitCurveInput_Degree_D(),
			"Tolerance_Ft": new FitCurveInput_Tolerance_Ft(),
		}
		this.output = {
			"Curve_C": new FitCurveOutput_Curve_C(),
		}
	}

}

class FitCurveInput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FitCurveInput_Degree_D extends ResthopperParameter {

	public name: string = "Degree";
	public nickName: string = "D";
	public isOptional: boolean = true;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FitCurveInput_Tolerance_Ft extends ResthopperParameter {

	public name: string = "Tolerance";
	public nickName: string = "Ft";
	public isOptional: boolean = true;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FitCurveOutput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
