import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class DelaunayMesh extends ResthopperComponent {

	public guid: string = "1eb4f6ff-3547-4184-bead-1b01e7cfd668";
	public name: string = "DelaunayMesh";
	public nickName: string = "Del";
	public category: string = "Mesh";
	public subCategory: string = "Triangulation";
	public description: string = "Delaunay triangulation";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Triangulation Components";

	public input:
	{
		"points_p": DelaunayMeshInput_points_p,
		"plane_pl": DelaunayMeshInput_plane_pl,
	}

	public output:
	{
		"mesh_m": DelaunayMeshOutput_mesh_m,
	}

	constructor() {
		super();
		this.input = {
			"points_p": new DelaunayMeshInput_points_p(),
			"plane_pl": new DelaunayMeshInput_plane_pl(),
		}
		this.output = {
			"mesh_m": new DelaunayMeshOutput_mesh_m(),
		}
	}

}

class DelaunayMeshInput_points_p extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DelaunayMeshInput_plane_pl extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "Pl";
	public isOptional: boolean = true;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DelaunayMeshOutput_mesh_m extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
