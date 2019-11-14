import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class BlendCurve extends ResthopperComponent {

	public guid: string = "5909dbcb-4950-4ce4-9433-7cf9e62ee011";
	public name: string = "BlendCurve";
	public nickName: string = "BlendC";
	public category: string = "Curve";
	public subCategory: string = "Spline";
	public description: string = "Create a blend curve between two curves.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"curvea_a": BlendCurveInput_curvea_a,
		"curveb_b": BlendCurveInput_curveb_b,
		"bulgea_fa": BlendCurveInput_bulgea_fa,
		"bulgeb_fb": BlendCurveInput_bulgeb_fb,
		"continuity_c": BlendCurveInput_continuity_c,
	}

	public output:
	{
		"blend_b": BlendCurveOutput_blend_b,
	}

	constructor() {
		super();
		this.input = {
			"curvea_a": new BlendCurveInput_curvea_a(),
			"curveb_b": new BlendCurveInput_curveb_b(),
			"bulgea_fa": new BlendCurveInput_bulgea_fa(),
			"bulgeb_fb": new BlendCurveInput_bulgeb_fb(),
			"continuity_c": new BlendCurveInput_continuity_c(),
		}
		this.output = {
			"blend_b": new BlendCurveOutput_blend_b(),
		}
	}

}

class BlendCurveInput_curvea_a extends ResthopperParameter {

	public name: string = "CurveA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BlendCurveInput_curveb_b extends ResthopperParameter {

	public name: string = "CurveB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BlendCurveInput_bulgea_fa extends ResthopperParameter {

	public name: string = "BulgeA";
	public nickName: string = "Fa";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BlendCurveInput_bulgeb_fb extends ResthopperParameter {

	public name: string = "BulgeB";
	public nickName: string = "Fb";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BlendCurveInput_continuity_c extends ResthopperParameter {

	public name: string = "Continuity";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BlendCurveOutput_blend_b extends ResthopperParameter {

	public name: string = "Blend";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
