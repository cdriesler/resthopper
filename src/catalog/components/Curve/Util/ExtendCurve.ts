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
		"curve_c": ExtendCurveInput_curve_c,
		"type_t": ExtendCurveInput_type_t,
		"start_l0": ExtendCurveInput_start_l0,
		"end_l1": ExtendCurveInput_end_l1,
	}

	public output:
	{
		"curve_c": ExtendCurveOutput_curve_c,
	}

	constructor() {
		super();
		this.input = {
			"curve_c": new ExtendCurveInput_curve_c(),
			"type_t": new ExtendCurveInput_type_t(),
			"start_l0": new ExtendCurveInput_start_l0(),
			"end_l1": new ExtendCurveInput_end_l1(),
		}
		this.output = {
			"curve_c": new ExtendCurveOutput_curve_c(),
		}
	}

}

class ExtendCurveInput_curve_c extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ExtendCurveInput_type_t extends ResthopperParameter {

	public name: string = "Type";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ExtendCurveInput_start_l0 extends ResthopperParameter {

	public name: string = "Start";
	public nickName: string = "L0";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ExtendCurveInput_end_l1 extends ResthopperParameter {

	public name: string = "End";
	public nickName: string = "L1";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ExtendCurveOutput_curve_c extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
