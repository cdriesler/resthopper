import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class DeleteVertices extends ResthopperComponent {

	public guid: string = "23d715f7-4bc6-4e69-b76d-7c04ca2ebf5f";
	public name: string = "DeleteVertices";
	public category: string = "Mesh";
	public subCategory: string = "Util";
	public description: string = "Delete vertices from a mesh";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Mesh_M": DeleteVerticesInput_Mesh_M,
		"Indices_I": DeleteVerticesInput_Indices_I,
		"Shrink_S": DeleteVerticesInput_Shrink_S,
	}

	public output:
	{
		"Mesh_M": DeleteVerticesOutput_Mesh_M,
	}

	constructor() {
		super();
		this.input = {
			"Mesh_M": new DeleteVerticesInput_Mesh_M(),
			"Indices_I": new DeleteVerticesInput_Indices_I(),
			"Shrink_S": new DeleteVerticesInput_Shrink_S(),
		}
		this.output = {
			"Mesh_M": new DeleteVerticesOutput_Mesh_M(),
		}
	}

}

class DeleteVerticesInput_Mesh_M extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeleteVerticesInput_Indices_I extends ResthopperParameter {

	public name: string = "Indices";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeleteVerticesInput_Shrink_S extends ResthopperParameter {

	public name: string = "Shrink";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeleteVerticesOutput_Mesh_M extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
