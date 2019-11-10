import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PlaneClosestPoint extends ResthopperComponent {

	public guid: string = "b075c065-efda-4c9f-9cc9-288362b1b4b9";
	public name: string = "PlaneClosestPoint";
	public category: string = "Vector";
	public subCategory: string = "Plane";
	public description: string = "Find the closest point on a plane.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"point_s": PlaneClosestPointInput_point_s,
		"plane_p": PlaneClosestPointInput_plane_p,
	}

	public output:
	{
		"point_p": PlaneClosestPointOutput_point_p,
		"uvpoint_uv": PlaneClosestPointOutput_uvpoint_uv,
		"distance_d": PlaneClosestPointOutput_distance_d,
	}

	constructor() {
		super();
		this.input = {
			"point_s": new PlaneClosestPointInput_point_s(),
			"plane_p": new PlaneClosestPointInput_plane_p(),
		}
		this.output = {
			"point_p": new PlaneClosestPointOutput_point_p(),
			"uvpoint_uv": new PlaneClosestPointOutput_uvpoint_uv(),
			"distance_d": new PlaneClosestPointOutput_distance_d(),
		}
	}

}

class PlaneClosestPointInput_point_s extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PlaneClosestPointInput_plane_p extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PlaneClosestPointOutput_point_p extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PlaneClosestPointOutput_uvpoint_uv extends ResthopperParameter {

	public name: string = "UVPoint";
	public nickName: string = "uv";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PlaneClosestPointOutput_distance_d extends ResthopperParameter {

	public name: string = "Distance";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
