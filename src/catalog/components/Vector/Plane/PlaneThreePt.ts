import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PlaneThreePt extends ResthopperComponent {

	public guid: string = "c98a6015-7a2f-423c-bc66-bdc505249b45";
	public name: string = "Plane3Pt";
	public category: string = "Vector";
	public subCategory: string = "Plane";
	public description: string = "Create a plane through three points.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"pointa_a": PlaneThreePtInput_pointa_a,
		"pointb_b": PlaneThreePtInput_pointb_b,
		"pointc_c": PlaneThreePtInput_pointc_c,
	}

	public output:
	{
		"plane_pl": PlaneThreePtOutput_plane_pl,
	}

	constructor() {
		super();
		this.input = {
			"pointa_a": new PlaneThreePtInput_pointa_a(),
			"pointb_b": new PlaneThreePtInput_pointb_b(),
			"pointc_c": new PlaneThreePtInput_pointc_c(),
		}
		this.output = {
			"plane_pl": new PlaneThreePtOutput_plane_pl(),
		}
	}

}

class PlaneThreePtInput_pointa_a extends ResthopperParameter {

	public name: string = "PointA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PlaneThreePtInput_pointb_b extends ResthopperParameter {

	public name: string = "PointB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PlaneThreePtInput_pointc_c extends ResthopperParameter {

	public name: string = "PointC";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PlaneThreePtOutput_plane_pl extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "Pl";
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
