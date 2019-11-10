import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ConstructMesh extends ResthopperComponent {

	public guid: string = "e2c0f9db-a862-4bd9-810c-ef2610e7a56f";
	public name: string = "ConstructMesh";
	public category: string = "Mesh";
	public subCategory: string = "Primitive";
	public description: string = "Construct a mesh from vertices, faces and optional colours.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"vertices_v": ConstructMeshInput_vertices_v,
		"faces_f": ConstructMeshInput_faces_f,
		"colours_c": ConstructMeshInput_colours_c,
	}

	public output:
	{
		"mesh_m": ConstructMeshOutput_mesh_m,
	}

	constructor() {
		super();
		this.input = {
			"vertices_v": new ConstructMeshInput_vertices_v(),
			"faces_f": new ConstructMeshInput_faces_f(),
			"colours_c": new ConstructMeshInput_colours_c(),
		}
		this.output = {
			"mesh_m": new ConstructMeshOutput_mesh_m(),
		}
	}

}

class ConstructMeshInput_vertices_v extends ResthopperParameter {

	public name: string = "Vertices";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConstructMeshInput_faces_f extends ResthopperParameter {

	public name: string = "Faces";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Mesh face"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConstructMeshInput_colours_c extends ResthopperParameter {

	public name: string = "Colours";
	public nickName: string = "C";
	public isOptional: boolean = true;
	public typeName: string = "Colour"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConstructMeshOutput_mesh_m extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
