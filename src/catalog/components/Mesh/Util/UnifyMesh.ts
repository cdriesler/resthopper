import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class UnifyMesh extends ResthopperComponent {

	public guid: string = "ca6a48f4-b681-4989-b0c1-301a2929a84c";
	public name: string = "UnifyMesh";
	public category: string = "Mesh";
	public subCategory: string = "Util";
	public description: string = "Unify the normals of a mesh";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Mesh_M": UnifyMeshInput_Mesh_M,
	}

	public output:
	{
		"Result_R": UnifyMeshOutput_Result_R,
		"Count_N": UnifyMeshOutput_Count_N,
	}

	constructor() {
		super();
		this.input = {
			"Mesh_M": new UnifyMeshInput_Mesh_M(),
		}
		this.output = {
			"Result_R": new UnifyMeshOutput_Result_R(),
			"Count_N": new UnifyMeshOutput_Count_N(),
		}
	}

}

class UnifyMeshInput_Mesh_M extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class UnifyMeshOutput_Result_R extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class UnifyMeshOutput_Count_N extends ResthopperParameter {

	public name: string = "Count";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
