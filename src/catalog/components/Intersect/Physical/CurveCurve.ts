import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CurveCurve extends ResthopperComponent {

	public guid: string = "84627490-0fb2-4498-8138-ad134ee4cb36";
	public name: string = "CurveCurve";
	public category: string = "Intersect";
	public subCategory: string = "Physical";
	public description: string = "Solve intersection events for two curves.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"curvea_a": CurveCurveInput_curvea_a,
		"curveb_b": CurveCurveInput_curveb_b,
	}

	public output:
	{
		"points_p": CurveCurveOutput_points_p,
		"paramsa_ta": CurveCurveOutput_paramsa_ta,
		"paramsb_tb": CurveCurveOutput_paramsb_tb,
	}

	constructor() {
		super();
		this.input = {
			"curvea_a": new CurveCurveInput_curvea_a(),
			"curveb_b": new CurveCurveInput_curveb_b(),
		}
		this.output = {
			"points_p": new CurveCurveOutput_points_p(),
			"paramsa_ta": new CurveCurveOutput_paramsa_ta(),
			"paramsb_tb": new CurveCurveOutput_paramsb_tb(),
		}
	}

}

class CurveCurveInput_curvea_a extends ResthopperParameter {

	public name: string = "CurveA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveCurveInput_curveb_b extends ResthopperParameter {

	public name: string = "CurveB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveCurveOutput_points_p extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveCurveOutput_paramsa_ta extends ResthopperParameter {

	public name: string = "ParamsA";
	public nickName: string = "tA";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveCurveOutput_paramsb_tb extends ResthopperParameter {

	public name: string = "ParamsB";
	public nickName: string = "tB";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
