import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class IsoVist extends ResthopperComponent {

	public guid: string = "cab92254-1c79-4e5a-9972-0a4412b35c88";
	public name: string = "IsoVist";
	public category: string = "Intersect";
	public subCategory: string = "Mathematical";
	public description: string = "Compute an isovist sampling at a location";
	public isObsolete: boolean = false;

	public library: string = "Triangulation Components";

	public input:
	{
		"plane_p": IsoVistInput_plane_p,
		"count_n": IsoVistInput_count_n,
		"radius_r": IsoVistInput_radius_r,
		"obstacles_o": IsoVistInput_obstacles_o,
	}

	public output:
	{
		"points_p": IsoVistOutput_points_p,
		"distance_d": IsoVistOutput_distance_d,
		"index_i": IsoVistOutput_index_i,
	}

	constructor() {
		super();
		this.input = {
			"plane_p": new IsoVistInput_plane_p(),
			"count_n": new IsoVistInput_count_n(),
			"radius_r": new IsoVistInput_radius_r(),
			"obstacles_o": new IsoVistInput_obstacles_o(),
		}
		this.output = {
			"points_p": new IsoVistOutput_points_p(),
			"distance_d": new IsoVistOutput_distance_d(),
			"index_i": new IsoVistOutput_index_i(),
		}
	}

}

class IsoVistInput_plane_p extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class IsoVistInput_count_n extends ResthopperParameter {

	public name: string = "Count";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class IsoVistInput_radius_r extends ResthopperParameter {

	public name: string = "Radius";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class IsoVistInput_obstacles_o extends ResthopperParameter {

	public name: string = "Obstacles";
	public nickName: string = "O";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class IsoVistOutput_points_p extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class IsoVistOutput_distance_d extends ResthopperParameter {

	public name: string = "Distance";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class IsoVistOutput_index_i extends ResthopperParameter {

	public name: string = "Index";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
