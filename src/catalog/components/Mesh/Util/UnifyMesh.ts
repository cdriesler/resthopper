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
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"mesh_m": UnifyMeshInput_mesh_m,
	}

	public output:
	{
		"result_r": UnifyMeshOutput_result_r,
		"count_n": UnifyMeshOutput_count_n,
	}

	constructor() {
		super();
		this.input = {
			"mesh_m": new UnifyMeshInput_mesh_m(),
		}
		this.output = {
			"result_r": new UnifyMeshOutput_result_r(),
			"count_n": new UnifyMeshOutput_count_n(),
		}
	}

}

class UnifyMeshInput_mesh_m extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class UnifyMeshOutput_result_r extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Mesh"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class UnifyMeshOutput_count_n extends ResthopperParameter {

	public name: string = "Count";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
