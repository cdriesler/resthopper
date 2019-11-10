import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PointInCurve extends ResthopperComponent {

	public guid: string = "a72b0bd3-c7a7-458e-875d-09ae1624638c";
	public name: string = "PointInCurve";
	public category: string = "Curve";
	public subCategory: string = "Analysis";
	public description: string = "Test a point for closed curve containment.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"point_p": PointInCurveInput_point_p,
		"curve_c": PointInCurveInput_curve_c,
	}

	public output:
	{
		"relationship_r": PointInCurveOutput_relationship_r,
		"point_p": PointInCurveOutput_point_p,
	}

	constructor() {
		super();
		this.input = {
			"point_p": new PointInCurveInput_point_p(),
			"curve_c": new PointInCurveInput_curve_c(),
		}
		this.output = {
			"relationship_r": new PointInCurveOutput_relationship_r(),
			"point_p": new PointInCurveOutput_point_p(),
		}
	}

}

class PointInCurveInput_point_p extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PointInCurveInput_curve_c extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PointInCurveOutput_relationship_r extends ResthopperParameter {

	public name: string = "Relationship";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PointInCurveOutput_point_p extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
