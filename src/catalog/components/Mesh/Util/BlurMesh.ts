import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class BlurMesh extends ResthopperComponent {

	public guid: string = "48a9fa10-8d3c-4767-aca6-81232271f6e0";
	public name: string = "BlurMesh";
	public category: string = "Mesh";
	public subCategory: string = "Util";
	public description: string = "Blur the colours on a mesh";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"mesh_m": BlurMeshInput_mesh_m,
		"iterations_i": BlurMeshInput_iterations_i,
	}

	public output:
	{
		"mesh_m": BlurMeshOutput_mesh_m,
	}

	constructor() {
		super();
		this.input = {
			"mesh_m": new BlurMeshInput_mesh_m(),
			"iterations_i": new BlurMeshInput_iterations_i(),
		}
		this.output = {
			"mesh_m": new BlurMeshOutput_mesh_m(),
		}
	}

}

class BlurMeshInput_mesh_m extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BlurMeshInput_iterations_i extends ResthopperParameter {

	public name: string = "Iterations";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BlurMeshOutput_mesh_m extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
