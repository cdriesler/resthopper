import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MeshUnion extends ResthopperComponent {

	public guid: string = "88060a82-0bf7-46bb-9af8-bdc860cf7e1d";
	public name: string = "MeshUnion";
	public category: string = "Intersect";
	public subCategory: string = "Shape";
	public description: string = "Perform a solid union on a set of meshes";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Meshes_M": MeshUnionInput_Meshes_M,
	}

	public output:
	{
		"Result_R": MeshUnionOutput_Result_R,
	}

	constructor() {
		super();
		this.input = {
			"Meshes_M": new MeshUnionInput_Meshes_M(),
		}
		this.output = {
			"Result_R": new MeshUnionOutput_Result_R(),
		}
	}

}

class MeshUnionInput_Meshes_M extends ResthopperParameter {

	public name: string = "Meshes";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshUnionOutput_Result_R extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
