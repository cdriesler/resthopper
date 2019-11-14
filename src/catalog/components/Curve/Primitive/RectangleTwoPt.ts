import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class RectangleTwoPt extends ResthopperComponent {

	public guid: string = "575660b1-8c79-4b8d-9222-7ab4a6ddb359";
	public name: string = "Rectangle2Pt";
	public nickName: string = "Rec2Pt";
	public category: string = "Curve";
	public subCategory: string = "Primitive";
	public description: string = "Create a rectangle from a base plane and two points";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"plane_p": RectangleTwoPtInput_plane_p,
		"pointa_a": RectangleTwoPtInput_pointa_a,
		"pointb_b": RectangleTwoPtInput_pointb_b,
		"radius_r": RectangleTwoPtInput_radius_r,
	}

	public output:
	{
		"rectangle_r": RectangleTwoPtOutput_rectangle_r,
		"length_l": RectangleTwoPtOutput_length_l,
	}

	constructor() {
		super();
		this.input = {
			"plane_p": new RectangleTwoPtInput_plane_p(),
			"pointa_a": new RectangleTwoPtInput_pointa_a(),
			"pointb_b": new RectangleTwoPtInput_pointb_b(),
			"radius_r": new RectangleTwoPtInput_radius_r(),
		}
		this.output = {
			"rectangle_r": new RectangleTwoPtOutput_rectangle_r(),
			"length_l": new RectangleTwoPtOutput_length_l(),
		}
	}

}

class RectangleTwoPtInput_plane_p extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RectangleTwoPtInput_pointa_a extends ResthopperParameter {

	public name: string = "PointA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RectangleTwoPtInput_pointb_b extends ResthopperParameter {

	public name: string = "PointB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RectangleTwoPtInput_radius_r extends ResthopperParameter {

	public name: string = "Radius";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RectangleTwoPtOutput_rectangle_r extends ResthopperParameter {

	public name: string = "Rectangle";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RectangleTwoPtOutput_length_l extends ResthopperParameter {

	public name: string = "Length";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
