import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class FaceNormals extends ResthopperComponent {

	public guid: string = "cb4ca22c-3419-4962-a078-ad4ff7f1f929";
	public name: string = "FaceNormals";
	public category: string = "Mesh";
	public subCategory: string = "Analysis";
	public description: string = "Extract the normals and center points of all faces in a mesh";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Mesh_M": FaceNormalsInput_Mesh_M,
	}

	public output:
	{
		"Centers_C": FaceNormalsOutput_Centers_C,
		"Normals_N": FaceNormalsOutput_Normals_N,
	}

	constructor() {
		super();
		this.input = {
			"Mesh_M": new FaceNormalsInput_Mesh_M(),
		}
		this.output = {
			"Centers_C": new FaceNormalsOutput_Centers_C(),
			"Normals_N": new FaceNormalsOutput_Normals_N(),
		}
	}

}

class FaceNormalsInput_Mesh_M extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FaceNormalsOutput_Centers_C extends ResthopperParameter {

	public name: string = "Centers";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FaceNormalsOutput_Normals_N extends ResthopperParameter {

	public name: string = "Normals";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
