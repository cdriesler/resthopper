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
		"Vertices_V": ConstructMeshInput_Vertices_V,
		"Faces_F": ConstructMeshInput_Faces_F,
		"Colours_C": ConstructMeshInput_Colours_C,
	}

	public output:
	{
		"Mesh_M": ConstructMeshOutput_Mesh_M,
	}

	constructor() {
		super();
		this.input = {
			"Vertices_V": new ConstructMeshInput_Vertices_V(),
			"Faces_F": new ConstructMeshInput_Faces_F(),
			"Colours_C": new ConstructMeshInput_Colours_C(),
		}
		this.output = {
			"Mesh_M": new ConstructMeshOutput_Mesh_M(),
		}
	}

}

class ConstructMeshInput_Vertices_V extends ResthopperParameter {

	public name: string = "Vertices";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConstructMeshInput_Faces_F extends ResthopperParameter {

	public name: string = "Faces";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Mesh face;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConstructMeshInput_Colours_C extends ResthopperParameter {

	public name: string = "Colours";
	public nickName: string = "C";
	public isOptional: boolean = true;
	public typeName: string = "Colour;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConstructMeshOutput_Mesh_M extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
