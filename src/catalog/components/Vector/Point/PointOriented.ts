import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PointOriented extends ResthopperComponent {

	public guid: string = "aa333235-5922-424c-9002-1e0b866a854b";
	public name: string = "PointOriented";
	public nickName: string = "Pt";
	public category: string = "Vector";
	public subCategory: string = "Point";
	public description: string = "Create a point from plane {u,v,w} coordinates.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"baseplane_p": PointOrientedInput_baseplane_p,
		"ucomponent_u": PointOrientedInput_ucomponent_u,
		"vcomponent_v": PointOrientedInput_vcomponent_v,
		"wcomponent_w": PointOrientedInput_wcomponent_w,
	}

	public output:
	{
		"point_pt": PointOrientedOutput_point_pt,
	}

	constructor() {
		super();
		this.input = {
			"baseplane_p": new PointOrientedInput_baseplane_p(),
			"ucomponent_u": new PointOrientedInput_ucomponent_u(),
			"vcomponent_v": new PointOrientedInput_vcomponent_v(),
			"wcomponent_w": new PointOrientedInput_wcomponent_w(),
		}
		this.output = {
			"point_pt": new PointOrientedOutput_point_pt(),
		}
	}

}

class PointOrientedInput_baseplane_p extends ResthopperParameter {

	public name: string = "Baseplane";
	public nickName: string = "P";
	public description: string = "Empty Plane parameter"
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PointOrientedInput_ucomponent_u extends ResthopperParameter {

	public name: string = "Ucomponent";
	public nickName: string = "U";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PointOrientedInput_vcomponent_v extends ResthopperParameter {

	public name: string = "Vcomponent";
	public nickName: string = "V";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PointOrientedInput_wcomponent_w extends ResthopperParameter {

	public name: string = "Wcomponent";
	public nickName: string = "W";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PointOrientedOutput_point_pt extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "Pt";
	public description: string = "Empty Point parameter"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
