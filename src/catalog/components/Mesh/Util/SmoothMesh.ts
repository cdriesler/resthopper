import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SmoothMesh extends ResthopperComponent {

	public guid: string = "e45aa4a0-e40d-421c-a335-5185dd131836";
	public name: string = "Smooth Mesh";
	public nickName: string = "MSmooth";
	public category: string = "Mesh";
	public subCategory: string = "Util";
	public description: string = "Smooth the vertices of a mesh";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Triangulation Components";

	public input:
	{
		"mesh_m": SmoothMeshInput_mesh_m,
		"strength_s": SmoothMeshInput_strength_s,
		"skipnaked_n": SmoothMeshInput_skipnaked_n,
		"iterations_i": SmoothMeshInput_iterations_i,
		"limit_l": SmoothMeshInput_limit_l,
	}

	public output:
	{
		"mesh_m": SmoothMeshOutput_mesh_m,
	}

	constructor() {
		super();
		this.input = {
			"mesh_m": new SmoothMeshInput_mesh_m(),
			"strength_s": new SmoothMeshInput_strength_s(),
			"skipnaked_n": new SmoothMeshInput_skipnaked_n(),
			"iterations_i": new SmoothMeshInput_iterations_i(),
			"limit_l": new SmoothMeshInput_limit_l(),
		}
		this.output = {
			"mesh_m": new SmoothMeshOutput_mesh_m(),
		}
	}

}

class SmoothMeshInput_mesh_m extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public description: string = "Empty Mesh parameter"
	public isOptional: boolean = false;
	public typeName: string = "Mesh"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SmoothMeshInput_strength_s extends ResthopperParameter {

	public name: string = "Strength";
	public nickName: string = "S";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SmoothMeshInput_skipnaked_n extends ResthopperParameter {

	public name: string = "SkipNaked";
	public nickName: string = "N";
	public description: string = "Empty Boolean parameter"
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SmoothMeshInput_iterations_i extends ResthopperParameter {

	public name: string = "Iterations";
	public nickName: string = "I";
	public description: string = "Empty Integer parameter"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SmoothMeshInput_limit_l extends ResthopperParameter {

	public name: string = "Limit";
	public nickName: string = "L";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = true;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SmoothMeshOutput_mesh_m extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public description: string = "Empty Mesh parameter"
	public isOptional: boolean = false;
	public typeName: string = "Mesh"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
