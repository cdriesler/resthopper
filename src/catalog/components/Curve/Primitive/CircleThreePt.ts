import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CircleThreePt extends ResthopperComponent {

	public guid: string = "47886835-e3ff-4516-a3ed-1b419f055464";
	public name: string = "Circle3Pt";
	public category: string = "Curve";
	public subCategory: string = "Primitive";
	public description: string = "Create a circle defined by three points.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"pointa_a": CircleThreePtInput_pointa_a,
		"pointb_b": CircleThreePtInput_pointb_b,
		"pointc_c": CircleThreePtInput_pointc_c,
	}

	public output:
	{
		"circle_c": CircleThreePtOutput_circle_c,
		"plane_p": CircleThreePtOutput_plane_p,
		"radius_r": CircleThreePtOutput_radius_r,
	}

	constructor() {
		super();
		this.input = {
			"pointa_a": new CircleThreePtInput_pointa_a(),
			"pointb_b": new CircleThreePtInput_pointb_b(),
			"pointc_c": new CircleThreePtInput_pointc_c(),
		}
		this.output = {
			"circle_c": new CircleThreePtOutput_circle_c(),
			"plane_p": new CircleThreePtOutput_plane_p(),
			"radius_r": new CircleThreePtOutput_radius_r(),
		}
	}

}

class CircleThreePtInput_pointa_a extends ResthopperParameter {

	public name: string = "PointA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CircleThreePtInput_pointb_b extends ResthopperParameter {

	public name: string = "PointB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CircleThreePtInput_pointc_c extends ResthopperParameter {

	public name: string = "PointC";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CircleThreePtOutput_circle_c extends ResthopperParameter {

	public name: string = "Circle";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Circle;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CircleThreePtOutput_plane_p extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CircleThreePtOutput_radius_r extends ResthopperParameter {

	public name: string = "Radius";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
