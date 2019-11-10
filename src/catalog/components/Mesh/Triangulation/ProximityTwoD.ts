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

	public library: string = "Triangulation Components";

	public input:
	{
		"Points_P": ProximityTwoDInput_Points_P,
		"Plane_Pl": ProximityTwoDInput_Plane_Pl,
		"Group_G": ProximityTwoDInput_Group_G,
		"MaxRadius_R": ProximityTwoDInput_MaxRadius_R,
	}

	public output:
	{
		"Links_L": ProximityTwoDOutput_Links_L,
		"Topology_T": ProximityTwoDOutput_Topology_T,
	}

	constructor() {
		super();
		this.input = {
			"Points_P": new ProximityTwoDInput_Points_P(),
			"Plane_Pl": new ProximityTwoDInput_Plane_Pl(),
			"Group_G": new ProximityTwoDInput_Group_G(),
			"MaxRadius_R": new ProximityTwoDInput_MaxRadius_R(),
		}
		this.output = {
			"Links_L": new ProximityTwoDOutput_Links_L(),
			"Topology_T": new ProximityTwoDOutput_Topology_T(),
		}
	}

}

class ProximityTwoDInput_Points_P extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ProximityTwoDInput_Plane_Pl extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "Pl";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ProximityTwoDInput_Group_G extends ResthopperParameter {

	public name: string = "Group";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ProximityTwoDInput_MaxRadius_R extends ResthopperParameter {

	public name: string = "MaxRadius";
	public nickName: string = "R";
	public isOptional: boolean = true;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ProximityTwoDOutput_Links_L extends ResthopperParameter {

	public name: string = "Links";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Line;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ProximityTwoDOutput_Topology_T extends ResthopperParameter {

	public name: string = "Topology";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
