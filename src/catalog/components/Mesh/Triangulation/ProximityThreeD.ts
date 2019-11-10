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

	public library: string = "Triangulation Components";

	public input:
	{
		"Points_P": ProximityThreeDInput_Points_P,
		"Group_G": ProximityThreeDInput_Group_G,
		"MaxRadius_R": ProximityThreeDInput_MaxRadius_R,
	}

	public output:
	{
		"Links_L": ProximityThreeDOutput_Links_L,
		"Topology_T": ProximityThreeDOutput_Topology_T,
	}

	constructor() {
		super();
		this.input = {
			"Points_P": new ProximityThreeDInput_Points_P(),
			"Group_G": new ProximityThreeDInput_Group_G(),
			"MaxRadius_R": new ProximityThreeDInput_MaxRadius_R(),
		}
		this.output = {
			"Links_L": new ProximityThreeDOutput_Links_L(),
			"Topology_T": new ProximityThreeDOutput_Topology_T(),
		}
	}

}

class ProximityThreeDInput_Points_P extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ProximityThreeDInput_Group_G extends ResthopperParameter {

	public name: string = "Group";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ProximityThreeDInput_MaxRadius_R extends ResthopperParameter {

	public name: string = "MaxRadius";
	public nickName: string = "R";
	public isOptional: boolean = true;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ProximityThreeDOutput_Links_L extends ResthopperParameter {

	public name: string = "Links";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Line;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ProximityThreeDOutput_Topology_T extends ResthopperParameter {

	public name: string = "Topology";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
