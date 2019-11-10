import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SmoothMesh extends ResthopperComponent {

	public guid: string = "e45aa4a0-e40d-421c-a335-5185dd131836";
	public name: string = "SmoothMesh";
	public category: string = "Mesh";
	public subCategory: string = "Util";
	public description: string = "Smooth the vertices of a mesh";
	public isObsolete: boolean = false;

	public library: string = "Triangulation Components";

	public input:
	{
		"Mesh_M": SmoothMeshInput_Mesh_M,
		"Strength_S": SmoothMeshInput_Strength_S,
		"SkipNaked_N": SmoothMeshInput_SkipNaked_N,
		"Iterations_I": SmoothMeshInput_Iterations_I,
		"Limit_L": SmoothMeshInput_Limit_L,
	}

	public output:
	{
		"Mesh_M": SmoothMeshOutput_Mesh_M,
	}

	constructor() {
		super();
		this.input = {
			"Mesh_M": new SmoothMeshInput_Mesh_M(),
			"Strength_S": new SmoothMeshInput_Strength_S(),
			"SkipNaked_N": new SmoothMeshInput_SkipNaked_N(),
			"Iterations_I": new SmoothMeshInput_Iterations_I(),
			"Limit_L": new SmoothMeshInput_Limit_L(),
		}
		this.output = {
			"Mesh_M": new SmoothMeshOutput_Mesh_M(),
		}
	}

}

class SmoothMeshInput_Mesh_M extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SmoothMeshInput_Strength_S extends ResthopperParameter {

	public name: string = "Strength";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SmoothMeshInput_SkipNaked_N extends ResthopperParameter {

	public name: string = "SkipNaked";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SmoothMeshInput_Iterations_I extends ResthopperParameter {

	public name: string = "Iterations";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SmoothMeshInput_Limit_L extends ResthopperParameter {

	public name: string = "Limit";
	public nickName: string = "L";
	public isOptional: boolean = true;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SmoothMeshOutput_Mesh_M extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
