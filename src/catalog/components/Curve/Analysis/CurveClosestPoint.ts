import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CurveClosestPoint extends ResthopperComponent {

	public guid: string = "2dc44b22-b1dd-460a-a704-6462d6e91096";
	public name: string = "CurveClosestPoint";
	public nickName: string = "CrvCP";
	public category: string = "Curve";
	public subCategory: string = "Analysis";
	public description: string = "Find the closest point on a curve.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"point_p": CurveClosestPointInput_point_p,
		"curve_c": CurveClosestPointInput_curve_c,
	}

	public output:
	{
		"point_p": CurveClosestPointOutput_point_p,
		"parameter_t": CurveClosestPointOutput_parameter_t,
		"distance_d": CurveClosestPointOutput_distance_d,
	}

	constructor() {
		super();
		this.input = {
			"point_p": new CurveClosestPointInput_point_p(),
			"curve_c": new CurveClosestPointInput_curve_c(),
		}
		this.output = {
			"point_p": new CurveClosestPointOutput_point_p(),
			"parameter_t": new CurveClosestPointOutput_parameter_t(),
			"distance_d": new CurveClosestPointOutput_distance_d(),
		}
	}

}

class CurveClosestPointInput_point_p extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveClosestPointInput_curve_c extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveClosestPointOutput_point_p extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveClosestPointOutput_parameter_t extends ResthopperParameter {

	public name: string = "Parameter";
	public nickName: string = "t";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveClosestPointOutput_distance_d extends ResthopperParameter {

	public name: string = "Distance";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
