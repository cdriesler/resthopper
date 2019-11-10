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
		"Curve_C": CurveSelfInput_Curve_C,
	}

	public output:
	{
		"Points_P": CurveSelfOutput_Points_P,
		"Params_t": CurveSelfOutput_Params_t,
	}

	constructor() {
		super();
		this.input = {
			"Curve_C": new CurveSelfInput_Curve_C(),
		}
		this.output = {
			"Points_P": new CurveSelfOutput_Points_P(),
			"Params_t": new CurveSelfOutput_Params_t(),
		}
	}

}

class CurveSelfInput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveSelfOutput_Points_P extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveSelfOutput_Params_t extends ResthopperParameter {

	public name: string = "Params";
	public nickName: string = "t";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
