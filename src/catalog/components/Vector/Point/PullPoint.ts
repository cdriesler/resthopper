import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PullPoint extends ResthopperComponent {

	public guid: string = "902289da-28dc-454b-98d4-b8f8aa234516";
	public name: string = "PullPoint";
	public category: string = "Vector";
	public subCategory: string = "Point";
	public description: string = "Pull a point to a variety of geometry.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"point_p": PullPointInput_point_p,
		"geometry_g": PullPointInput_geometry_g,
	}

	public output:
	{
		"closestpoint_p": PullPointOutput_closestpoint_p,
		"distance_d": PullPointOutput_distance_d,
	}

	constructor() {
		super();
		this.input = {
			"point_p": new PullPointInput_point_p(),
			"geometry_g": new PullPointInput_geometry_g(),
		}
		this.output = {
			"closestpoint_p": new PullPointOutput_closestpoint_p(),
			"distance_d": new PullPointOutput_distance_d(),
		}
	}

}

class PullPointInput_point_p extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PullPointInput_geometry_g extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PullPointOutput_closestpoint_p extends ResthopperParameter {

	public name: string = "ClosestPoint";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PullPointOutput_distance_d extends ResthopperParameter {

	public name: string = "Distance";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
