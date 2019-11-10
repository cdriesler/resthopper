import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class DelaunayMesh extends ResthopperComponent {

	public guid: string = "1eb4f6ff-3547-4184-bead-1b01e7cfd668";
	public name: string = "DelaunayMesh";
	public category: string = "Mesh";
	public subCategory: string = "Triangulation";
	public description: string = "Delaunay triangulation";
	public isObsolete: boolean = false;

	public library: string = "Triangulation Components";

	public input:
	{
		"Points_P": DelaunayMeshInput_Points_P,
		"Plane_Pl": DelaunayMeshInput_Plane_Pl,
	}

	public output:
	{
		"Mesh_M": DelaunayMeshOutput_Mesh_M,
	}

	constructor() {
		super();
		this.input = {
			"Points_P": new DelaunayMeshInput_Points_P(),
			"Plane_Pl": new DelaunayMeshInput_Plane_Pl(),
		}
		this.output = {
			"Mesh_M": new DelaunayMeshOutput_Mesh_M(),
		}
	}

}

class DelaunayMeshInput_Points_P extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DelaunayMeshInput_Plane_Pl extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "Pl";
	public isOptional: boolean = true;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DelaunayMeshOutput_Mesh_M extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
