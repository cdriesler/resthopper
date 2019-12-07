import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class FlipCurve extends ResthopperComponent {

	public guid: string = "22990b1f-9be6-477c-ad89-f775cd347105";
	public name: string = "FlipCurve";
	public nickName: string = "Flip";
	public category: string = "Curve";
	public subCategory: string = "Util";
	public description: string = "Flip a curve using an optional guide curve.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"curve_c": FlipCurveInput_curve_c,
		"guide_g": FlipCurveInput_guide_g,
	}

	public output:
	{
		"curve_c": FlipCurveOutput_curve_c,
		"flag_f": FlipCurveOutput_flag_f,
	}

	constructor() {
		super();
		this.input = {
			"curve_c": new FlipCurveInput_curve_c(),
			"guide_g": new FlipCurveInput_guide_g(),
		}
		this.output = {
			"curve_c": new FlipCurveOutput_curve_c(),
			"flag_f": new FlipCurveOutput_flag_f(),
		}
	}

}

class FlipCurveInput_curve_c extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public description: string = "Empty Curve parameter"
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FlipCurveInput_guide_g extends ResthopperParameter {

	public name: string = "Guide";
	public nickName: string = "G";
	public description: string = "Empty Curve parameter"
	public isOptional: boolean = true;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FlipCurveOutput_curve_c extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public description: string = "Empty Curve parameter"
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FlipCurveOutput_flag_f extends ResthopperParameter {

	public name: string = "Flag";
	public nickName: string = "F";
	public description: string = "Empty Boolean parameter"
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
