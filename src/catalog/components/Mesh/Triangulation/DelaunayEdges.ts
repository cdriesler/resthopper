import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class DelaunayEdges extends ResthopperComponent {

	public guid: string = "db2a4d25-23fa-4887-8983-ee5293cc82c0";
	public name: string = "DelaunayEdges";
	public category: string = "Mesh";
	public subCategory: string = "Triangulation";
	public description: string = "Delaunay connectivity";
	public isObsolete: boolean = false;

	public library: string = "Triangulation Components";

	public input:
	{
		"Points_P": DelaunayEdgesInput_Points_P,
		"Plane_Pl": DelaunayEdgesInput_Plane_Pl,
	}

	public output:
	{
		"Connectivity_C": DelaunayEdgesOutput_Connectivity_C,
		"Edges_E": DelaunayEdgesOutput_Edges_E,
	}

	constructor() {
		super();
		this.input = {
			"Points_P": new DelaunayEdgesInput_Points_P(),
			"Plane_Pl": new DelaunayEdgesInput_Plane_Pl(),
		}
		this.output = {
			"Connectivity_C": new DelaunayEdgesOutput_Connectivity_C(),
			"Edges_E": new DelaunayEdgesOutput_Edges_E(),
		}
	}

}

class DelaunayEdgesInput_Points_P extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DelaunayEdgesInput_Plane_Pl extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "Pl";
	public isOptional: boolean = true;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DelaunayEdgesOutput_Connectivity_C extends ResthopperParameter {

	public name: string = "Connectivity";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DelaunayEdgesOutput_Edges_E extends ResthopperParameter {

	public name: string = "Edges";
	public nickName: string = "E";
	public isOptional: boolean = false;
	public typeName: string = "Line;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
