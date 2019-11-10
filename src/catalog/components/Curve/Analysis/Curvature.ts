import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Curvature extends ResthopperComponent {

	public guid: string = "aaa665bd-fd6e-4ccb-8d2c-c5b33072125d";
	public name: string = "Curvature";
	public category: string = "Curve";
	public subCategory: string = "Analysis";
	public description: string = "Evaluate the curvature of a curve at a specified parameter.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"curve_c": CurvatureInput_curve_c,
		"parameter_t": CurvatureInput_parameter_t,
	}

	public output:
	{
		"point_p": CurvatureOutput_point_p,
		"curvature_k": CurvatureOutput_curvature_k,
		"curvature_c": CurvatureOutput_curvature_c,
	}

	constructor() {
		super();
		this.input = {
			"curve_c": new CurvatureInput_curve_c(),
			"parameter_t": new CurvatureInput_parameter_t(),
		}
		this.output = {
			"point_p": new CurvatureOutput_point_p(),
			"curvature_k": new CurvatureOutput_curvature_k(),
			"curvature_c": new CurvatureOutput_curvature_c(),
		}
	}

}

class CurvatureInput_curve_c extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurvatureInput_parameter_t extends ResthopperParameter {

	public name: string = "Parameter";
	public nickName: string = "t";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurvatureOutput_point_p extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurvatureOutput_curvature_k extends ResthopperParameter {

	public name: string = "Curvature";
	public nickName: string = "K";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurvatureOutput_curvature_c extends ResthopperParameter {

	public name: string = "Curvature";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
