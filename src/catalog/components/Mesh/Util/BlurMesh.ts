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

	public library: string = "Surface Components";

	public input:
	{
		"Mesh_M": BlurMeshInput_Mesh_M,
		"Iterations_I": BlurMeshInput_Iterations_I,
	}

	public output:
	{
		"Mesh_M": BlurMeshOutput_Mesh_M,
	}

	constructor() {
		super();
		this.input = {
			"Mesh_M": new BlurMeshInput_Mesh_M(),
			"Iterations_I": new BlurMeshInput_Iterations_I(),
		}
		this.output = {
			"Mesh_M": new BlurMeshOutput_Mesh_M(),
		}
	}

}

class BlurMeshInput_Mesh_M extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BlurMeshInput_Iterations_I extends ResthopperParameter {

	public name: string = "Iterations";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BlurMeshOutput_Mesh_M extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
