import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class QuadTree extends ResthopperComponent {

	public guid: string = "8102032b-9699-4949-ab12-3017a31d1062";
	public name: string = "QuadTree";
	public category: string = "Mesh";
	public subCategory: string = "Triangulation";
	public description: string = "A two-dimensional quadtree structure";
	public isObsolete: boolean = false;

	public library: string = "Triangulation Components";

	public input:
	{
		"Points_P": QuadTreeInput_Points_P,
		"Plane_Pl": QuadTreeInput_Plane_Pl,
		"Square_S": QuadTreeInput_Square_S,
		"Group_G": QuadTreeInput_Group_G,
	}

	public output:
	{
		"Quads_Q": QuadTreeOutput_Quads_Q,
		"Points_P": QuadTreeOutput_Points_P,
	}

	constructor() {
		super();
		this.input = {
			"Points_P": new QuadTreeInput_Points_P(),
			"Plane_Pl": new QuadTreeInput_Plane_Pl(),
			"Square_S": new QuadTreeInput_Square_S(),
			"Group_G": new QuadTreeInput_Group_G(),
		}
		this.output = {
			"Quads_Q": new QuadTreeOutput_Quads_Q(),
			"Points_P": new QuadTreeOutput_Points_P(),
		}
	}

}

class QuadTreeInput_Points_P extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class QuadTreeInput_Plane_Pl extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "Pl";
	public isOptional: boolean = true;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class QuadTreeInput_Square_S extends ResthopperParameter {

	public name: string = "Square";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class QuadTreeInput_Group_G extends ResthopperParameter {

	public name: string = "Group";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class QuadTreeOutput_Quads_Q extends ResthopperParameter {

	public name: string = "Quads";
	public nickName: string = "Q";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class QuadTreeOutput_Points_P extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
