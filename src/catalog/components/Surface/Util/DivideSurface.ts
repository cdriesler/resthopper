import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class DivideSurface extends ResthopperComponent {

	public guid: string = "5106bafc-d5d4-4983-83e7-7be3ed07f502";
	public name: string = "DivideSurface";
	public nickName: string = "SDivide";
	public category: string = "Surface";
	public subCategory: string = "Util";
	public description: string = "Generate a grid of {uv} points on a surface.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"surface_s": DivideSurfaceInput_surface_s,
		"ucount_u": DivideSurfaceInput_ucount_u,
		"vcount_v": DivideSurfaceInput_vcount_v,
	}

	public output:
	{
		"points_p": DivideSurfaceOutput_points_p,
		"normals_n": DivideSurfaceOutput_normals_n,
		"parameters_uv": DivideSurfaceOutput_parameters_uv,
	}

	constructor() {
		super();
		this.input = {
			"surface_s": new DivideSurfaceInput_surface_s(),
			"ucount_u": new DivideSurfaceInput_ucount_u(),
			"vcount_v": new DivideSurfaceInput_vcount_v(),
		}
		this.output = {
			"points_p": new DivideSurfaceOutput_points_p(),
			"normals_n": new DivideSurfaceOutput_normals_n(),
			"parameters_uv": new DivideSurfaceOutput_parameters_uv(),
		}
	}

}

class DivideSurfaceInput_surface_s extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Surface"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DivideSurfaceInput_ucount_u extends ResthopperParameter {

	public name: string = "UCount";
	public nickName: string = "U";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DivideSurfaceInput_vcount_v extends ResthopperParameter {

	public name: string = "VCount";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DivideSurfaceOutput_points_p extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DivideSurfaceOutput_normals_n extends ResthopperParameter {

	public name: string = "Normals";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Vector"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DivideSurfaceOutput_parameters_uv extends ResthopperParameter {

	public name: string = "Parameters";
	public nickName: string = "uv";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
