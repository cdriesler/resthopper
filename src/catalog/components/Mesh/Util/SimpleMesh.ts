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
		"brep_b": SimpleMeshInput_brep_b,
	}

	public output:
	{
		"mesh_m": SimpleMeshOutput_mesh_m,
	}

	constructor() {
		super();
		this.input = {
			"brep_b": new SimpleMeshInput_brep_b(),
		}
		this.output = {
			"mesh_m": new SimpleMeshOutput_mesh_m(),
		}
	}

}

class SimpleMeshInput_brep_b extends ResthopperParameter {

	public name: string = "Brep";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Brep;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SimpleMeshOutput_mesh_m extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
