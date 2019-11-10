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
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"meshes_m": MeshJoinInput_meshes_m,
	}

	public output:
	{
		"mesh_m": MeshJoinOutput_mesh_m,
	}

	constructor() {
		super();
		this.input = {
			"meshes_m": new MeshJoinInput_meshes_m(),
		}
		this.output = {
			"mesh_m": new MeshJoinOutput_mesh_m(),
		}
	}

}

class MeshJoinInput_meshes_m extends ResthopperParameter {

	public name: string = "Meshes";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshJoinOutput_mesh_m extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
