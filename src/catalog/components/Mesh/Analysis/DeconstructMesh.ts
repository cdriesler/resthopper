import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class DeconstructMesh extends ResthopperComponent {

	public guid: string = "ba2d8f57-0738-42b4-b5a5-fe4d853517eb";
	public name: string = "Deconstruct Mesh";
	public nickName: string = "DeMesh";
	public category: string = "Mesh";
	public subCategory: string = "Analysis";
	public description: string = "Deconstruct a mesh into its component parts.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"mesh_m": DeconstructMeshInput_mesh_m,
	}

	public output:
	{
		"vertices_v": DeconstructMeshOutput_vertices_v,
		"faces_f": DeconstructMeshOutput_faces_f,
		"colours_c": DeconstructMeshOutput_colours_c,
		"normals_n": DeconstructMeshOutput_normals_n,
	}

	constructor() {
		super();
		this.input = {
			"mesh_m": new DeconstructMeshInput_mesh_m(),
		}
		this.output = {
			"vertices_v": new DeconstructMeshOutput_vertices_v(),
			"faces_f": new DeconstructMeshOutput_faces_f(),
			"colours_c": new DeconstructMeshOutput_colours_c(),
			"normals_n": new DeconstructMeshOutput_normals_n(),
		}
	}

}

class DeconstructMeshInput_mesh_m extends ResthopperParameter {

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

class DeconstructMeshOutput_vertices_v extends ResthopperParameter {

	public name: string = "Vertices";
	public nickName: string = "V";
	public description: string = "Empty Point parameter"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeconstructMeshOutput_faces_f extends ResthopperParameter {

	public name: string = "Faces";
	public nickName: string = "F";
	public description: string = "Empty Mesh face parameter"
	public isOptional: boolean = false;
	public typeName: string = "Mesh face"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeconstructMeshOutput_colours_c extends ResthopperParameter {

	public name: string = "Colours";
	public nickName: string = "C";
	public description: string = "Empty Colour parameter"
	public isOptional: boolean = false;
	public typeName: string = "Colour"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeconstructMeshOutput_normals_n extends ResthopperParameter {

	public name: string = "Normals";
	public nickName: string = "N";
	public description: string = "Empty Vector parameter"
	public isOptional: boolean = false;
	public typeName: string = "Vector"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
