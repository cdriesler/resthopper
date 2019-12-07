import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class OffsetCurve extends ResthopperComponent {

	public guid: string = "1a38d325-98de-455c-93f1-bca431bc1243";
	public name: string = "OffsetCurve";
	public nickName: string = "Offset";
	public category: string = "Curve";
	public subCategory: string = "Util";
	public description: string = "Offset a curve with a specified distance.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"corners_c": OffsetCurveInput_corners_c,
		"distance_d": OffsetCurveInput_distance_d,
		"plane_p": OffsetCurveInput_plane_p,
	}

	public output:
	{
		"curve_c": OffsetCurveOutput_curve_c,
	}

	constructor() {
		super();
		this.input = {
			"corners_c": new OffsetCurveInput_corners_c(),
			"distance_d": new OffsetCurveInput_distance_d(),
			"plane_p": new OffsetCurveInput_plane_p(),
		}
		this.output = {
			"curve_c": new OffsetCurveOutput_curve_c(),
		}
	}

}

class OffsetCurveInput_corners_c extends ResthopperParameter {

	public name: string = "Corners";
	public nickName: string = "C";
	public description: string = "Empty Integer parameter"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OffsetCurveInput_distance_d extends ResthopperParameter {

	public name: string = "Distance";
	public nickName: string = "D";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OffsetCurveInput_plane_p extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public description: string = "Empty Plane parameter"
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OffsetCurveOutput_curve_c extends ResthopperParameter {

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
