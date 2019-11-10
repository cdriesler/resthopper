import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class BlendCurvePt extends ResthopperComponent {

	public guid: string = "14cf43b6-5eb9-460f-899c-bdece732213a";
	public name: string = "BlendCurvePt";
	public category: string = "Curve";
	public subCategory: string = "Spline";
	public description: string = "Create a blend curve between two curves that intersects a point.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"CurveA_A": BlendCurvePtInput_CurveA_A,
		"CurveB_B": BlendCurvePtInput_CurveB_B,
		"Point_P": BlendCurvePtInput_Point_P,
		"Continuity_C": BlendCurvePtInput_Continuity_C,
	}

	public output:
	{
		"Blend_B": BlendCurvePtOutput_Blend_B,
	}

	constructor() {
		super();
		this.input = {
			"CurveA_A": new BlendCurvePtInput_CurveA_A(),
			"CurveB_B": new BlendCurvePtInput_CurveB_B(),
			"Point_P": new BlendCurvePtInput_Point_P(),
			"Continuity_C": new BlendCurvePtInput_Continuity_C(),
		}
		this.output = {
			"Blend_B": new BlendCurvePtOutput_Blend_B(),
		}
	}

}

class BlendCurvePtInput_CurveA_A extends ResthopperParameter {

	public name: string = "CurveA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BlendCurvePtInput_CurveB_B extends ResthopperParameter {

	public name: string = "CurveB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BlendCurvePtInput_Point_P extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BlendCurvePtInput_Continuity_C extends ResthopperParameter {

	public name: string = "Continuity";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BlendCurvePtOutput_Blend_B extends ResthopperParameter {

	public name: string = "Blend";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
