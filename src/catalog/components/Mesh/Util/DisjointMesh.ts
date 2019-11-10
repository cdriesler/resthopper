import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class DisjointMesh extends ResthopperComponent {

	public guid: string = "4dce5963-dc1a-4710-8991-9437ea23888d";
	public name: string = "DisjointMesh";
	public category: string = "Mesh";
	public subCategory: string = "Util";
	public description: string = "Split a mesh into disjoint pieces.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"mesh_m": DisjointMeshInput_mesh_m,
	}

	public output:
	{
		"meshes_m": DisjointMeshOutput_meshes_m,
	}

	constructor() {
		super();
		this.input = {
			"mesh_m": new DisjointMeshInput_mesh_m(),
		}
		this.output = {
			"meshes_m": new DisjointMeshOutput_meshes_m(),
		}
	}

}

class DisjointMeshInput_mesh_m extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DisjointMeshOutput_meshes_m extends ResthopperParameter {

	public name: string = "Meshes";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
