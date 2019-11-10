import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ProximityTwoD extends ResthopperComponent {

	public guid: string = "458ed0e0-19a3-419b-8ead-f524925b8a35";
	public name: string = "Proximity2D";
	public category: string = "Mesh";
	public subCategory: string = "Triangulation";
	public description: string = "Search for two-dimensional proximity within a point list";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Triangulation Components";

	public input:
	{
		"points_p": ProximityTwoDInput_points_p,
		"plane_pl": ProximityTwoDInput_plane_pl,
		"group_g": ProximityTwoDInput_group_g,
		"maxradius_r": ProximityTwoDInput_maxradius_r,
	}

	public output:
	{
		"links_l": ProximityTwoDOutput_links_l,
		"topology_t": ProximityTwoDOutput_topology_t,
	}

	constructor() {
		super();
		this.input = {
			"points_p": new ProximityTwoDInput_points_p(),
			"plane_pl": new ProximityTwoDInput_plane_pl(),
			"group_g": new ProximityTwoDInput_group_g(),
			"maxradius_r": new ProximityTwoDInput_maxradius_r(),
		}
		this.output = {
			"links_l": new ProximityTwoDOutput_links_l(),
			"topology_t": new ProximityTwoDOutput_topology_t(),
		}
	}

}

class ProximityTwoDInput_points_p extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ProximityTwoDInput_plane_pl extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "Pl";
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ProximityTwoDInput_group_g extends ResthopperParameter {

	public name: string = "Group";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ProximityTwoDInput_maxradius_r extends ResthopperParameter {

	public name: string = "MaxRadius";
	public nickName: string = "R";
	public isOptional: boolean = true;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ProximityTwoDOutput_links_l extends ResthopperParameter {

	public name: string = "Links";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Line"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ProximityTwoDOutput_topology_t extends ResthopperParameter {

	public name: string = "Topology";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
