import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ExtendCurve extends ResthopperComponent {

	public guid: string = "62cc9684-6a39-422e-aefa-ed44643557b9";
	public name: string = "ExtendCurve";
	public category: string = "Curve";
	public subCategory: string = "Util";
	public description: string = "Extend a curve by a specified distance.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Curve_C": ExtendCurveInput_Curve_C,
		"Type_T": ExtendCurveInput_Type_T,
		"Start_L0": ExtendCurveInput_Start_L0,
		"End_L1": ExtendCurveInput_End_L1,
	}

	public output:
	{
		"Curve_C": ExtendCurveOutput_Curve_C,
	}

	constructor() {
		super();
		this.input = {
			"Curve_C": new ExtendCurveInput_Curve_C(),
			"Type_T": new ExtendCurveInput_Type_T(),
			"Start_L0": new ExtendCurveInput_Start_L0(),
			"End_L1": new ExtendCurveInput_End_L1(),
		}
		this.output = {
			"Curve_C": new ExtendCurveOutput_Curve_C(),
		}
	}

}

class ExtendCurveInput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ExtendCurveInput_Type_T extends ResthopperParameter {

	public name: string = "Type";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ExtendCurveInput_Start_L0 extends ResthopperParameter {

	public name: string = "Start";
	public nickName: string = "L0";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ExtendCurveInput_End_L1 extends ResthopperParameter {

	public name: string = "End";
	public nickName: string = "L1";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ExtendCurveOutput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
