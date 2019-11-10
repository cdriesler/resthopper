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
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"mesh_m": DeleteVerticesInput_mesh_m,
		"indices_i": DeleteVerticesInput_indices_i,
		"shrink_s": DeleteVerticesInput_shrink_s,
	}

	public output:
	{
		"mesh_m": DeleteVerticesOutput_mesh_m,
	}

	constructor() {
		super();
		this.input = {
			"mesh_m": new DeleteVerticesInput_mesh_m(),
			"indices_i": new DeleteVerticesInput_indices_i(),
			"shrink_s": new DeleteVerticesInput_shrink_s(),
		}
		this.output = {
			"mesh_m": new DeleteVerticesOutput_mesh_m(),
		}
	}

}

class DeleteVerticesInput_mesh_m extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeleteVerticesInput_indices_i extends ResthopperParameter {

	public name: string = "Indices";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeleteVerticesInput_shrink_s extends ResthopperParameter {

	public name: string = "Shrink";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeleteVerticesOutput_mesh_m extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
