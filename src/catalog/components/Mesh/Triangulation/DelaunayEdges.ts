import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class DelaunayEdges extends ResthopperComponent {

	public guid: string = "db2a4d25-23fa-4887-8983-ee5293cc82c0";
	public name: string = "Delaunay Edges";
	public nickName: string = "Con";
	public category: string = "Mesh";
	public subCategory: string = "Triangulation";
	public description: string = "Delaunay connectivity";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Triangulation Components";

	public input:
	{
		"points_p": DelaunayEdgesInput_points_p,
		"plane_pl": DelaunayEdgesInput_plane_pl,
	}

	public output:
	{
		"connectivity_c": DelaunayEdgesOutput_connectivity_c,
		"edges_e": DelaunayEdgesOutput_edges_e,
	}

	constructor() {
		super();
		this.input = {
			"points_p": new DelaunayEdgesInput_points_p(),
			"plane_pl": new DelaunayEdgesInput_plane_pl(),
		}
		this.output = {
			"connectivity_c": new DelaunayEdgesOutput_connectivity_c(),
			"edges_e": new DelaunayEdgesOutput_edges_e(),
		}
	}

}

class DelaunayEdgesInput_points_p extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public description: string = "Points for triangulate"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DelaunayEdgesInput_plane_pl extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "Pl";
	public description: string = "Optional base plane. If no plane is provided, then the best-fit plane will be used."
	public isOptional: boolean = true;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DelaunayEdgesOutput_connectivity_c extends ResthopperParameter {

	public name: string = "Connectivity";
	public nickName: string = "C";
	public description: string = "Topological Connectivity diagram"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DelaunayEdgesOutput_edges_e extends ResthopperParameter {

	public name: string = "Edges";
	public nickName: string = "E";
	public description: string = "Edges of the connectivity diagram"
	public isOptional: boolean = false;
	public typeName: string = "Line"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
