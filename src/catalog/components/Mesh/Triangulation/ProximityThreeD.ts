import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ProximityThreeD extends ResthopperComponent {

	public guid: string = "e504d619-4467-437a-92fa-c6822d16b066";
	public name: string = "Proximity3D";
	public category: string = "Mesh";
	public subCategory: string = "Triangulation";
	public description: string = "Search for three-dimensional proximity within a point list";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Triangulation Components";

	public input:
	{
		"points_p": ProximityThreeDInput_points_p,
		"group_g": ProximityThreeDInput_group_g,
		"maxradius_r": ProximityThreeDInput_maxradius_r,
	}

	public output:
	{
		"links_l": ProximityThreeDOutput_links_l,
		"topology_t": ProximityThreeDOutput_topology_t,
	}

	constructor() {
		super();
		this.input = {
			"points_p": new ProximityThreeDInput_points_p(),
			"group_g": new ProximityThreeDInput_group_g(),
			"maxradius_r": new ProximityThreeDInput_maxradius_r(),
		}
		this.output = {
			"links_l": new ProximityThreeDOutput_links_l(),
			"topology_t": new ProximityThreeDOutput_topology_t(),
		}
	}

}

class ProximityThreeDInput_points_p extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ProximityThreeDInput_group_g extends ResthopperParameter {

	public name: string = "Group";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ProximityThreeDInput_maxradius_r extends ResthopperParameter {

	public name: string = "MaxRadius";
	public nickName: string = "R";
	public isOptional: boolean = true;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ProximityThreeDOutput_links_l extends ResthopperParameter {

	public name: string = "Links";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Line"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ProximityThreeDOutput_topology_t extends ResthopperParameter {

	public name: string = "Topology";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
