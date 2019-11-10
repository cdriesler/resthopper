import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PullCurve extends ResthopperComponent {

	public guid: string = "6b5812f5-bb36-4d74-97fc-5a1f2f77452d";
	public name: string = "PullCurve";
	public category: string = "Curve";
	public subCategory: string = "Util";
	public description: string = "Pull a curve onto a surface.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Curve_C": PullCurveInput_Curve_C,
		"Surface_S": PullCurveInput_Surface_S,
	}

	public output:
	{
		"Curve_C": PullCurveOutput_Curve_C,
	}

	constructor() {
		super();
		this.input = {
			"Curve_C": new PullCurveInput_Curve_C(),
			"Surface_S": new PullCurveInput_Surface_S(),
		}
		this.output = {
			"Curve_C": new PullCurveOutput_Curve_C(),
		}
	}

}

class PullCurveInput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PullCurveInput_Surface_S extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Surface;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PullCurveOutput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
