import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CurveSide extends ResthopperComponent {

	public guid: string = "bb2e13da-09ca-43fd-bef8-8d71f3653af9";
	public name: string = "CurveSide";
	public nickName: string = "Side";
	public category: string = "Curve";
	public subCategory: string = "Analysis";
	public description: string = "Find on which side of a curve a point exists";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"curve_c": CurveSideInput_curve_c,
		"point_p": CurveSideInput_point_p,
		"plane_pl": CurveSideInput_plane_pl,
	}

	public output:
	{
		"side_s": CurveSideOutput_side_s,
		"left_l": CurveSideOutput_left_l,
		"right_r": CurveSideOutput_right_r,
	}

	constructor() {
		super();
		this.input = {
			"curve_c": new CurveSideInput_curve_c(),
			"point_p": new CurveSideInput_point_p(),
			"plane_pl": new CurveSideInput_plane_pl(),
		}
		this.output = {
			"side_s": new CurveSideOutput_side_s(),
			"left_l": new CurveSideOutput_left_l(),
			"right_r": new CurveSideOutput_right_r(),
		}
	}

}

class CurveSideInput_curve_c extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveSideInput_point_p extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveSideInput_plane_pl extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "Pl";
	public isOptional: boolean = true;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveSideOutput_side_s extends ResthopperParameter {

	public name: string = "Side";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveSideOutput_left_l extends ResthopperParameter {

	public name: string = "Left";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveSideOutput_right_r extends ResthopperParameter {

	public name: string = "Right";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
