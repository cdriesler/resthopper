import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ArcThreePt extends ResthopperComponent {

	public guid: string = "9fa1b081-b1c7-4a12-a163-0aa8da9ff6c4";
	public name: string = "Arc3Pt";
	public category: string = "Curve";
	public subCategory: string = "Primitive";
	public description: string = "Create an arc through three points.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"pointa_a": ArcThreePtInput_pointa_a,
		"pointb_b": ArcThreePtInput_pointb_b,
		"pointc_c": ArcThreePtInput_pointc_c,
	}

	public output:
	{
		"arc_a": ArcThreePtOutput_arc_a,
		"plane_p": ArcThreePtOutput_plane_p,
		"radius_r": ArcThreePtOutput_radius_r,
	}

	constructor() {
		super();
		this.input = {
			"pointa_a": new ArcThreePtInput_pointa_a(),
			"pointb_b": new ArcThreePtInput_pointb_b(),
			"pointc_c": new ArcThreePtInput_pointc_c(),
		}
		this.output = {
			"arc_a": new ArcThreePtOutput_arc_a(),
			"plane_p": new ArcThreePtOutput_plane_p(),
			"radius_r": new ArcThreePtOutput_radius_r(),
		}
	}

}

class ArcThreePtInput_pointa_a extends ResthopperParameter {

	public name: string = "PointA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ArcThreePtInput_pointb_b extends ResthopperParameter {

	public name: string = "PointB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ArcThreePtInput_pointc_c extends ResthopperParameter {

	public name: string = "PointC";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ArcThreePtOutput_arc_a extends ResthopperParameter {

	public name: string = "Arc";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ArcThreePtOutput_plane_p extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ArcThreePtOutput_radius_r extends ResthopperParameter {

	public name: string = "Radius";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
