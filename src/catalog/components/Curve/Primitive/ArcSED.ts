import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ArcSED extends ResthopperComponent {

	public guid: string = "9d2583dd-6cf5-497c-8c40-c9a290598396";
	public name: string = "ArcSED";
	public category: string = "Curve";
	public subCategory: string = "Primitive";
	public description: string = "Create an arc defined by start point, end point and a tangent vector.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"start_s": ArcSEDInput_start_s,
		"end_e": ArcSEDInput_end_e,
		"direction_d": ArcSEDInput_direction_d,
	}

	public output:
	{
		"arc_a": ArcSEDOutput_arc_a,
		"plane_p": ArcSEDOutput_plane_p,
		"radius_r": ArcSEDOutput_radius_r,
	}

	constructor() {
		super();
		this.input = {
			"start_s": new ArcSEDInput_start_s(),
			"end_e": new ArcSEDInput_end_e(),
			"direction_d": new ArcSEDInput_direction_d(),
		}
		this.output = {
			"arc_a": new ArcSEDOutput_arc_a(),
			"plane_p": new ArcSEDOutput_plane_p(),
			"radius_r": new ArcSEDOutput_radius_r(),
		}
	}

}

class ArcSEDInput_start_s extends ResthopperParameter {

	public name: string = "Start";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ArcSEDInput_end_e extends ResthopperParameter {

	public name: string = "End";
	public nickName: string = "E";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ArcSEDInput_direction_d extends ResthopperParameter {

	public name: string = "Direction";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Vector"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ArcSEDOutput_arc_a extends ResthopperParameter {

	public name: string = "Arc";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Geometry"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ArcSEDOutput_plane_p extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ArcSEDOutput_radius_r extends ResthopperParameter {

	public name: string = "Radius";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
