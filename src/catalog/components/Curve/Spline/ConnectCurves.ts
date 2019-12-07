import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ConnectCurves extends ResthopperComponent {

	public guid: string = "d0a1b843-873d-4d1d-965c-b5423b35f327";
	public name: string = "ConnectCurves";
	public nickName: string = "Connect";
	public category: string = "Curve";
	public subCategory: string = "Spline";
	public description: string = "Connect a sequence of curves.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"curves_c": ConnectCurvesInput_curves_c,
		"continuity_g": ConnectCurvesInput_continuity_g,
		"close_l": ConnectCurvesInput_close_l,
		"bulge_b": ConnectCurvesInput_bulge_b,
	}

	public output:
	{
		"curve_c": ConnectCurvesOutput_curve_c,
	}

	constructor() {
		super();
		this.input = {
			"curves_c": new ConnectCurvesInput_curves_c(),
			"continuity_g": new ConnectCurvesInput_continuity_g(),
			"close_l": new ConnectCurvesInput_close_l(),
			"bulge_b": new ConnectCurvesInput_bulge_b(),
		}
		this.output = {
			"curve_c": new ConnectCurvesOutput_curve_c(),
		}
	}

}

class ConnectCurvesInput_curves_c extends ResthopperParameter {

	public name: string = "Curves";
	public nickName: string = "C";
	public description: string = "Empty Curve parameter"
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConnectCurvesInput_continuity_g extends ResthopperParameter {

	public name: string = "Continuity";
	public nickName: string = "G";
	public description: string = "Empty Integer parameter"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConnectCurvesInput_close_l extends ResthopperParameter {

	public name: string = "Close";
	public nickName: string = "L";
	public description: string = "Empty Boolean parameter"
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConnectCurvesInput_bulge_b extends ResthopperParameter {

	public name: string = "Bulge";
	public nickName: string = "B";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConnectCurvesOutput_curve_c extends ResthopperParameter {

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
