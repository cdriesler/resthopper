import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class FlipMesh extends ResthopperComponent {

	public guid: string = "47fbc929-e88a-4a13-882e-dad84763256d";
	public name: string = "FlipMesh";
	public nickName: string = "FlipM";
	public category: string = "Mesh";
	public subCategory: string = "Util";
	public description: string = "Flip the normal vectors of a mesh";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"mesh_m": FlipMeshInput_mesh_m,
		"vertexnormals_vn": FlipMeshInput_vertexnormals_vn,
		"facenormals_fn": FlipMeshInput_facenormals_fn,
		"faceorientation_fo": FlipMeshInput_faceorientation_fo,
	}

	public output:
	{
		"result_r": FlipMeshOutput_result_r,
	}

	constructor() {
		super();
		this.input = {
			"mesh_m": new FlipMeshInput_mesh_m(),
			"vertexnormals_vn": new FlipMeshInput_vertexnormals_vn(),
			"facenormals_fn": new FlipMeshInput_facenormals_fn(),
			"faceorientation_fo": new FlipMeshInput_faceorientation_fo(),
		}
		this.output = {
			"result_r": new FlipMeshOutput_result_r(),
		}
	}

}

class FlipMeshInput_mesh_m extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FlipMeshInput_vertexnormals_vn extends ResthopperParameter {

	public name: string = "VertexNormals";
	public nickName: string = "Vn";
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FlipMeshInput_facenormals_fn extends ResthopperParameter {

	public name: string = "FaceNormals";
	public nickName: string = "Fn";
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FlipMeshInput_faceorientation_fo extends ResthopperParameter {

	public name: string = "FaceOrientation";
	public nickName: string = "Fo";
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FlipMeshOutput_result_r extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Mesh"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
