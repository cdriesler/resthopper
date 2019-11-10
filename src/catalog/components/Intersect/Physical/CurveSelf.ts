import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CurveSelf extends ResthopperComponent {

	public guid: string = "0991ac99-6a0b-47a9-b07d-dd510ca57f0f";
	public name: string = "CurveSelf";
	public category: string = "Intersect";
	public subCategory: string = "Physical";
	public description: string = "Solve all self intersection events for a curve.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"curve_c": CurveSelfInput_curve_c,
	}

	public output:
	{
		"points_p": CurveSelfOutput_points_p,
		"params_t": CurveSelfOutput_params_t,
	}

	constructor() {
		super();
		this.input = {
			"curve_c": new CurveSelfInput_curve_c(),
		}
		this.output = {
			"points_p": new CurveSelfOutput_points_p(),
			"params_t": new CurveSelfOutput_params_t(),
		}
	}

}

class CurveSelfInput_curve_c extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveSelfOutput_points_p extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveSelfOutput_params_t extends ResthopperParameter {

	public name: string = "Params";
	public nickName: string = "t";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
