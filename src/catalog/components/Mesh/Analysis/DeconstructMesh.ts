import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class DeconstructMesh extends ResthopperComponent {

	public guid: string = "ba2d8f57-0738-42b4-b5a5-fe4d853517eb";
	public name: string = "DeconstructMesh";
	public category: string = "Mesh";
	public subCategory: string = "Analysis";
	public description: string = "Deconstruct a mesh into its component parts.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Mesh_M": DeconstructMeshInput_Mesh_M,
	}

	public output:
	{
		"Vertices_V": DeconstructMeshOutput_Vertices_V,
		"Faces_F": DeconstructMeshOutput_Faces_F,
		"Colours_C": DeconstructMeshOutput_Colours_C,
		"Normals_N": DeconstructMeshOutput_Normals_N,
	}

	constructor() {
		super();
		this.input = {
			"Mesh_M": new DeconstructMeshInput_Mesh_M(),
		}
		this.output = {
			"Vertices_V": new DeconstructMeshOutput_Vertices_V(),
			"Faces_F": new DeconstructMeshOutput_Faces_F(),
			"Colours_C": new DeconstructMeshOutput_Colours_C(),
			"Normals_N": new DeconstructMeshOutput_Normals_N(),
		}
	}

}

class DeconstructMeshInput_Mesh_M extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeconstructMeshOutput_Vertices_V extends ResthopperParameter {

	public name: string = "Vertices";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeconstructMeshOutput_Faces_F extends ResthopperParameter {

	public name: string = "Faces";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Mesh face;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeconstructMeshOutput_Colours_C extends ResthopperParameter {

	public name: string = "Colours";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Colour;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeconstructMeshOutput_Normals_N extends ResthopperParameter {

	public name: string = "Normals";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
