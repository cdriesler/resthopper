import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class BlendCurve extends ResthopperComponent {

	public guid: string = "5909dbcb-4950-4ce4-9433-7cf9e62ee011";
	public name: string = "BlendCurve";
	public category: string = "Curve";
	public subCategory: string = "Spline";
	public description: string = "Create a blend curve between two curves.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"CurveA_A": BlendCurveInput_CurveA_A,
		"CurveB_B": BlendCurveInput_CurveB_B,
		"BulgeA_Fa": BlendCurveInput_BulgeA_Fa,
		"BulgeB_Fb": BlendCurveInput_BulgeB_Fb,
		"Continuity_C": BlendCurveInput_Continuity_C,
	}

	public output:
	{
		"Blend_B": BlendCurveOutput_Blend_B,
	}

	constructor() {
		super();
		this.input = {
			"CurveA_A": new BlendCurveInput_CurveA_A(),
			"CurveB_B": new BlendCurveInput_CurveB_B(),
			"BulgeA_Fa": new BlendCurveInput_BulgeA_Fa(),
			"BulgeB_Fb": new BlendCurveInput_BulgeB_Fb(),
			"Continuity_C": new BlendCurveInput_Continuity_C(),
		}
		this.output = {
			"Blend_B": new BlendCurveOutput_Blend_B(),
		}
	}

}

class BlendCurveInput_CurveA_A extends ResthopperParameter {

	public name: string = "CurveA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BlendCurveInput_CurveB_B extends ResthopperParameter {

	public name: string = "CurveB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BlendCurveInput_BulgeA_Fa extends ResthopperParameter {

	public name: string = "BulgeA";
	public nickName: string = "Fa";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BlendCurveInput_BulgeB_Fb extends ResthopperParameter {

	public name: string = "BulgeB";
	public nickName: string = "Fb";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BlendCurveInput_Continuity_C extends ResthopperParameter {

	public name: string = "Continuity";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BlendCurveOutput_Blend_B extends ResthopperParameter {

	public name: string = "Blend";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
