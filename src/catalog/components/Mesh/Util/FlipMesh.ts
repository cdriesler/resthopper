import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class FlipMesh extends ResthopperComponent {

	public guid: string = "47fbc929-e88a-4a13-882e-dad84763256d";
	public name: string = "FlipMesh";
	public category: string = "Mesh";
	public subCategory: string = "Util";
	public description: string = "Flip the normal vectors of a mesh";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Mesh_M": FlipMeshInput_Mesh_M,
		"VertexNormals_Vn": FlipMeshInput_VertexNormals_Vn,
		"FaceNormals_Fn": FlipMeshInput_FaceNormals_Fn,
		"FaceOrientation_Fo": FlipMeshInput_FaceOrientation_Fo,
	}

	public output:
	{
		"Result_R": FlipMeshOutput_Result_R,
	}

	constructor() {
		super();
		this.input = {
			"Mesh_M": new FlipMeshInput_Mesh_M(),
			"VertexNormals_Vn": new FlipMeshInput_VertexNormals_Vn(),
			"FaceNormals_Fn": new FlipMeshInput_FaceNormals_Fn(),
			"FaceOrientation_Fo": new FlipMeshInput_FaceOrientation_Fo(),
		}
		this.output = {
			"Result_R": new FlipMeshOutput_Result_R(),
		}
	}

}

class FlipMeshInput_Mesh_M extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FlipMeshInput_VertexNormals_Vn extends ResthopperParameter {

	public name: string = "VertexNormals";
	public nickName: string = "Vn";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FlipMeshInput_FaceNormals_Fn extends ResthopperParameter {

	public name: string = "FaceNormals";
	public nickName: string = "Fn";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FlipMeshInput_FaceOrientation_Fo extends ResthopperParameter {

	public name: string = "FaceOrientation";
	public nickName: string = "Fo";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FlipMeshOutput_Result_R extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
