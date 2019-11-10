import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SimpleMesh extends ResthopperComponent {

	public guid: string = "c3f9cea5-6fd4-4db5-959b-08cd08ed9fe1";
	public name: string = "SimpleMesh";
	public category: string = "Mesh";
	public subCategory: string = "Util";
	public description: string = "Create a mesh that represents a Brep as simply as possible";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Brep_B": SimpleMeshInput_Brep_B,
	}

	public output:
	{
		"Mesh_M": SimpleMeshOutput_Mesh_M,
	}

	constructor() {
		super();
		this.input = {
			"Brep_B": new SimpleMeshInput_Brep_B(),
		}
		this.output = {
			"Mesh_M": new SimpleMeshOutput_Mesh_M(),
		}
	}

}

class SimpleMeshInput_Brep_B extends ResthopperParameter {

	public name: string = "Brep";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Brep;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SimpleMeshOutput_Mesh_M extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
