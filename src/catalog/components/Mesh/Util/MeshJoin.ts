import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MeshJoin extends ResthopperComponent {

	public guid: string = "4bc9dbbf-fec8-4348-a3af-e33e7edc8e7b";
	public name: string = "MeshJoin";
	public category: string = "Mesh";
	public subCategory: string = "Util";
	public description: string = "Join a set of meshes into a single mesh";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Meshes_M": MeshJoinInput_Meshes_M,
	}

	public output:
	{
		"Mesh_M": MeshJoinOutput_Mesh_M,
	}

	constructor() {
		super();
		this.input = {
			"Meshes_M": new MeshJoinInput_Meshes_M(),
		}
		this.output = {
			"Mesh_M": new MeshJoinOutput_Mesh_M(),
		}
	}

}

class MeshJoinInput_Meshes_M extends ResthopperParameter {

	public name: string = "Meshes";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshJoinOutput_Mesh_M extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
