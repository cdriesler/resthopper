import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CullVertices extends ResthopperComponent {

	public guid: string = "9d50bf9b-46bc-403a-9ec9-1052f51dd6b6";
	public name: string = "CullVertices";
	public category: string = "Mesh";
	public subCategory: string = "Util";
	public description: string = "Cull vertices from a mesh";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Mesh_M": CullVerticesInput_Mesh_M,
		"Pattern_P": CullVerticesInput_Pattern_P,
		"Shrink_S": CullVerticesInput_Shrink_S,
	}

	public output:
	{
		"Mesh_M": CullVerticesOutput_Mesh_M,
	}

	constructor() {
		super();
		this.input = {
			"Mesh_M": new CullVerticesInput_Mesh_M(),
			"Pattern_P": new CullVerticesInput_Pattern_P(),
			"Shrink_S": new CullVerticesInput_Shrink_S(),
		}
		this.output = {
			"Mesh_M": new CullVerticesOutput_Mesh_M(),
		}
	}

}

class CullVerticesInput_Mesh_M extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CullVerticesInput_Pattern_P extends ResthopperParameter {

	public name: string = "Pattern";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CullVerticesInput_Shrink_S extends ResthopperParameter {

	public name: string = "Shrink";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CullVerticesOutput_Mesh_M extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
