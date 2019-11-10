import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SurfaceClosestPoint extends ResthopperComponent {

	public guid: string = "4a9e9a8e-0943-4438-b360-129c30f2bb0f";
	public name: string = "SurfaceClosestPoint";
	public category: string = "Surface";
	public subCategory: string = "Analysis";
	public description: string = "Find the closest point on a surface.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"point_p": SurfaceClosestPointInput_point_p,
		"surface_s": SurfaceClosestPointInput_surface_s,
	}

	public output:
	{
		"point_p": SurfaceClosestPointOutput_point_p,
		"uvpoint_uvp": SurfaceClosestPointOutput_uvpoint_uvp,
		"distance_d": SurfaceClosestPointOutput_distance_d,
	}

	constructor() {
		super();
		this.input = {
			"point_p": new SurfaceClosestPointInput_point_p(),
			"surface_s": new SurfaceClosestPointInput_surface_s(),
		}
		this.output = {
			"point_p": new SurfaceClosestPointOutput_point_p(),
			"uvpoint_uvp": new SurfaceClosestPointOutput_uvpoint_uvp(),
			"distance_d": new SurfaceClosestPointOutput_distance_d(),
		}
	}

}

class SurfaceClosestPointInput_point_p extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SurfaceClosestPointInput_surface_s extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Surface"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SurfaceClosestPointOutput_point_p extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SurfaceClosestPointOutput_uvpoint_uvp extends ResthopperParameter {

	public name: string = "UVPoint";
	public nickName: string = "uvP";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SurfaceClosestPointOutput_distance_d extends ResthopperParameter {

	public name: string = "Distance";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
