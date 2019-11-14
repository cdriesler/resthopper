import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class OffsetCurveLoose extends ResthopperComponent {

	public guid: string = "80e55fc2-933b-4bfb-a353-12358786dba8";
	public name: string = "OffsetCurveLoose";
	public nickName: string = "OffsetL";
	public category: string = "Curve";
	public subCategory: string = "Util";
	public description: string = "Offset the control-points of a curve with a specified distance.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"curve_c": OffsetCurveLooseInput_curve_c,
		"distance_d": OffsetCurveLooseInput_distance_d,
		"plane_p": OffsetCurveLooseInput_plane_p,
	}

	public output:
	{
		"curve_c": OffsetCurveLooseOutput_curve_c,
	}

	constructor() {
		super();
		this.input = {
			"curve_c": new OffsetCurveLooseInput_curve_c(),
			"distance_d": new OffsetCurveLooseInput_distance_d(),
			"plane_p": new OffsetCurveLooseInput_plane_p(),
		}
		this.output = {
			"curve_c": new OffsetCurveLooseOutput_curve_c(),
		}
	}

}

class OffsetCurveLooseInput_curve_c extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OffsetCurveLooseInput_distance_d extends ResthopperParameter {

	public name: string = "Distance";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OffsetCurveLooseInput_plane_p extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = true;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OffsetCurveLooseOutput_curve_c extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
