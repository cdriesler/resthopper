import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MeshUnion extends ResthopperComponent {

	public guid: string = "88060a82-0bf7-46bb-9af8-bdc860cf7e1d";
	public name: string = "MeshUnion";
	public nickName: string = "MUnion";
	public category: string = "Intersect";
	public subCategory: string = "Shape";
	public description: string = "Perform a solid union on a set of meshes";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"meshes_m": MeshUnionInput_meshes_m,
	}

	public output:
	{
		"result_r": MeshUnionOutput_result_r,
	}

	constructor() {
		super();
		this.input = {
			"meshes_m": new MeshUnionInput_meshes_m(),
		}
		this.output = {
			"result_r": new MeshUnionOutput_result_r(),
		}
	}

}

class MeshUnionInput_meshes_m extends ResthopperParameter {

	public name: string = "Meshes";
	public nickName: string = "M";
	public description: string = "Empty Mesh parameter"
	public isOptional: boolean = false;
	public typeName: string = "Mesh"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshUnionOutput_result_r extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public description: string = "Empty Mesh parameter"
	public isOptional: boolean = false;
	public typeName: string = "Mesh"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
