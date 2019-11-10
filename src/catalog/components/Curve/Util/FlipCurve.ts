import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class FlipCurve extends ResthopperComponent {

	public guid: string = "22990b1f-9be6-477c-ad89-f775cd347105";
	public name: string = "FlipCurve";
	public category: string = "Curve";
	public subCategory: string = "Util";
	public description: string = "Flip a curve using an optional guide curve.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Curve_C": FlipCurveInput_Curve_C,
		"Guide_G": FlipCurveInput_Guide_G,
	}

	public output:
	{
		"Curve_C": FlipCurveOutput_Curve_C,
		"Flag_F": FlipCurveOutput_Flag_F,
	}

	constructor() {
		super();
		this.input = {
			"Curve_C": new FlipCurveInput_Curve_C(),
			"Guide_G": new FlipCurveInput_Guide_G(),
		}
		this.output = {
			"Curve_C": new FlipCurveOutput_Curve_C(),
			"Flag_F": new FlipCurveOutput_Flag_F(),
		}
	}

}

class FlipCurveInput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FlipCurveInput_Guide_G extends ResthopperParameter {

	public name: string = "Guide";
	public nickName: string = "G";
	public isOptional: boolean = true;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FlipCurveOutput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FlipCurveOutput_Flag_F extends ResthopperParameter {

	public name: string = "Flag";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
