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
		"CurveA_A": CurveCurveInput_CurveA_A,
		"CurveB_B": CurveCurveInput_CurveB_B,
	}

	public output:
	{
		"Points_P": CurveCurveOutput_Points_P,
		"ParamsA_tA": CurveCurveOutput_ParamsA_tA,
		"ParamsB_tB": CurveCurveOutput_ParamsB_tB,
	}

	constructor() {
		super();
		this.input = {
			"CurveA_A": new CurveCurveInput_CurveA_A(),
			"CurveB_B": new CurveCurveInput_CurveB_B(),
		}
		this.output = {
			"Points_P": new CurveCurveOutput_Points_P(),
			"ParamsA_tA": new CurveCurveOutput_ParamsA_tA(),
			"ParamsB_tB": new CurveCurveOutput_ParamsB_tB(),
		}
	}

}

class CurveCurveInput_CurveA_A extends ResthopperParameter {

	public name: string = "CurveA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveCurveInput_CurveB_B extends ResthopperParameter {

	public name: string = "CurveB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveCurveOutput_Points_P extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveCurveOutput_ParamsA_tA extends ResthopperParameter {

	public name: string = "ParamsA";
	public nickName: string = "tA";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveCurveOutput_ParamsB_tB extends ResthopperParameter {

	public name: string = "ParamsB";
	public nickName: string = "tB";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
