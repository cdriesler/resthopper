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
		"Geometry_G": SplopInput_Geometry_G,
		"Plane_P": SplopInput_Plane_P,
		"Surface_S": SplopInput_Surface_S,
		"Parameter_uv": SplopInput_Parameter_uv,
		"Angle_A": SplopInput_Angle_A,
		"Rigid_R": SplopInput_Rigid_R,
	}

	public output:
	{
		"Geometry_G": SplopOutput_Geometry_G,
	}

	constructor() {
		super();
		this.input = {
			"Geometry_G": new SplopInput_Geometry_G(),
			"Plane_P": new SplopInput_Plane_P(),
			"Surface_S": new SplopInput_Surface_S(),
			"Parameter_uv": new SplopInput_Parameter_uv(),
			"Angle_A": new SplopInput_Angle_A(),
			"Rigid_R": new SplopInput_Rigid_R(),
		}
		this.output = {
			"Geometry_G": new SplopOutput_Geometry_G(),
		}
	}

}

class SplopInput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SplopInput_Plane_P extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SplopInput_Surface_S extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Surface;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SplopInput_Parameter_uv extends ResthopperParameter {

	public name: string = "Parameter";
	public nickName: string = "uv";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SplopInput_Angle_A extends ResthopperParameter {

	public name: string = "Angle";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SplopInput_Rigid_R extends ResthopperParameter {

	public name: string = "Rigid";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SplopOutput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
