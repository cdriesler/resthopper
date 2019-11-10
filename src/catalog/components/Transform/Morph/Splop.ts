import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Splop extends ResthopperComponent {

	public guid: string = "ff4e6ccd-47ba-4c8c-8287-2a1f2cb1fa5e";
	public name: string = "Splop";
	public category: string = "Transform";
	public subCategory: string = "Morph";
	public description: string = "Wraps geometry onto a surface.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"geometry_g": SplopInput_geometry_g,
		"plane_p": SplopInput_plane_p,
		"surface_s": SplopInput_surface_s,
		"parameter_uv": SplopInput_parameter_uv,
		"angle_a": SplopInput_angle_a,
		"rigid_r": SplopInput_rigid_r,
	}

	public output:
	{
		"geometry_g": SplopOutput_geometry_g,
	}

	constructor() {
		super();
		this.input = {
			"geometry_g": new SplopInput_geometry_g(),
			"plane_p": new SplopInput_plane_p(),
			"surface_s": new SplopInput_surface_s(),
			"parameter_uv": new SplopInput_parameter_uv(),
			"angle_a": new SplopInput_angle_a(),
			"rigid_r": new SplopInput_rigid_r(),
		}
		this.output = {
			"geometry_g": new SplopOutput_geometry_g(),
		}
	}

}

class SplopInput_geometry_g extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SplopInput_plane_p extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SplopInput_surface_s extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Surface;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SplopInput_parameter_uv extends ResthopperParameter {

	public name: string = "Parameter";
	public nickName: string = "uv";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SplopInput_angle_a extends ResthopperParameter {

	public name: string = "Angle";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SplopInput_rigid_r extends ResthopperParameter {

	public name: string = "Rigid";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SplopOutput_geometry_g extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
