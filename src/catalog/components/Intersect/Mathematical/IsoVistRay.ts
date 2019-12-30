import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class IsoVistRay extends ResthopperComponent {

	public guid: string = "93d0dcbc-6207-4745-aaf7-fe57a880f959";
	public name: string = "IsoVist Ray";
	public nickName: string = "IVRay";
	public category: string = "Intersect";
	public subCategory: string = "Mathematical";
	public description: string = "Compute a single isovist sample at a location";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Triangulation Components";

	public input:
	{
		"sample_s": IsoVistRayInput_sample_s,
		"radius_r": IsoVistRayInput_radius_r,
		"obstacles_o": IsoVistRayInput_obstacles_o,
	}

	public output:
	{
		"point_p": IsoVistRayOutput_point_p,
		"distance_d": IsoVistRayOutput_distance_d,
		"index_i": IsoVistRayOutput_index_i,
	}

	constructor() {
		super();
		this.input = {
			"sample_s": new IsoVistRayInput_sample_s(),
			"radius_r": new IsoVistRayInput_radius_r(),
			"obstacles_o": new IsoVistRayInput_obstacles_o(),
		}
		this.output = {
			"point_p": new IsoVistRayOutput_point_p(),
			"distance_d": new IsoVistRayOutput_distance_d(),
			"index_i": new IsoVistRayOutput_index_i(),
		}
	}

}

class IsoVistRayInput_sample_s extends ResthopperParameter {

	public name: string = "Sample";
	public nickName: string = "S";
	public description: string = "Sampling ray"
	public isOptional: boolean = false;
	public typeName: string = "Line"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class IsoVistRayInput_radius_r extends ResthopperParameter {

	public name: string = "Radius";
	public nickName: string = "R";
	public description: string = "Sample radius"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class IsoVistRayInput_obstacles_o extends ResthopperParameter {

	public name: string = "Obstacles";
	public nickName: string = "O";
	public description: string = "Obstacle outlines (curves, planes, meshes and breps are allowed)"
	public isOptional: boolean = false;
	public typeName: string = "Geometry"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class IsoVistRayOutput_point_p extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public description: string = "Intersection point of the sample ray with the obstacles"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class IsoVistRayOutput_distance_d extends ResthopperParameter {

	public name: string = "Distance";
	public nickName: string = "D";
	public description: string = "Distance from ray start to intersection point"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class IsoVistRayOutput_index_i extends ResthopperParameter {

	public name: string = "Index";
	public nickName: string = "I";
	public description: string = "Obstacle index for hit, or -1 if no obstacle was hit"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
