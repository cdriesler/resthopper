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
		"Mesh_M": DisjointMeshInput_Mesh_M,
	}

	public output:
	{
		"Meshes_M": DisjointMeshOutput_Meshes_M,
	}

	constructor() {
		super();
		this.input = {
			"Mesh_M": new DisjointMeshInput_Mesh_M(),
		}
		this.output = {
			"Meshes_M": new DisjointMeshOutput_Meshes_M(),
		}
	}

}

class DisjointMeshInput_Mesh_M extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DisjointMeshOutput_Meshes_M extends ResthopperParameter {

	public name: string = "Meshes";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
