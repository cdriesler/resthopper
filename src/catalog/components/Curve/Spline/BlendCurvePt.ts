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
		"curvea_a": BlendCurvePtInput_curvea_a,
		"curveb_b": BlendCurvePtInput_curveb_b,
		"point_p": BlendCurvePtInput_point_p,
		"continuity_c": BlendCurvePtInput_continuity_c,
	}

	public output:
	{
		"blend_b": BlendCurvePtOutput_blend_b,
	}

	constructor() {
		super();
		this.input = {
			"curvea_a": new BlendCurvePtInput_curvea_a(),
			"curveb_b": new BlendCurvePtInput_curveb_b(),
			"point_p": new BlendCurvePtInput_point_p(),
			"continuity_c": new BlendCurvePtInput_continuity_c(),
		}
		this.output = {
			"blend_b": new BlendCurvePtOutput_blend_b(),
		}
	}

}

class BlendCurvePtInput_curvea_a extends ResthopperParameter {

	public name: string = "CurveA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BlendCurvePtInput_curveb_b extends ResthopperParameter {

	public name: string = "CurveB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BlendCurvePtInput_point_p extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BlendCurvePtInput_continuity_c extends ResthopperParameter {

	public name: string = "Continuity";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BlendCurvePtOutput_blend_b extends ResthopperParameter {

	public name: string = "Blend";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
