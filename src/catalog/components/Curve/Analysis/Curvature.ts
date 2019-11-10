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
		"Curve_C": CurvatureInput_Curve_C,
		"Parameter_t": CurvatureInput_Parameter_t,
	}

	public output:
	{
		"Point_P": CurvatureOutput_Point_P,
		"Curvature_K": CurvatureOutput_Curvature_K,
		"Curvature_C": CurvatureOutput_Curvature_C,
	}

	constructor() {
		super();
		this.input = {
			"Curve_C": new CurvatureInput_Curve_C(),
			"Parameter_t": new CurvatureInput_Parameter_t(),
		}
		this.output = {
			"Point_P": new CurvatureOutput_Point_P(),
			"Curvature_K": new CurvatureOutput_Curvature_K(),
			"Curvature_C": new CurvatureOutput_Curvature_C(),
		}
	}

}

class CurvatureInput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurvatureInput_Parameter_t extends ResthopperParameter {

	public name: string = "Parameter";
	public nickName: string = "t";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurvatureOutput_Point_P extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurvatureOutput_Curvature_K extends ResthopperParameter {

	public name: string = "Curvature";
	public nickName: string = "K";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurvatureOutput_Curvature_C extends ResthopperParameter {

	public name: string = "Curvature";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
