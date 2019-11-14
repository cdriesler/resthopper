import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PullCurve extends ResthopperComponent {

	public guid: string = "6b5812f5-bb36-4d74-97fc-5a1f2f77452d";
	public name: string = "PullCurve";
	public nickName: string = "Pull";
	public category: string = "Curve";
	public subCategory: string = "Util";
	public description: string = "Pull a curve onto a surface.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"curve_c": PullCurveInput_curve_c,
		"surface_s": PullCurveInput_surface_s,
	}

	public output:
	{
		"curve_c": PullCurveOutput_curve_c,
	}

	constructor() {
		super();
		this.input = {
			"curve_c": new PullCurveInput_curve_c(),
			"surface_s": new PullCurveInput_surface_s(),
		}
		this.output = {
			"curve_c": new PullCurveOutput_curve_c(),
		}
	}

}

class PullCurveInput_curve_c extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PullCurveInput_surface_s extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Surface"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PullCurveOutput_curve_c extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
