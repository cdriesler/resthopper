import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CullVertices extends ResthopperComponent {

	public guid: string = "9d50bf9b-46bc-403a-9ec9-1052f51dd6b6";
	public name: string = "CullVertices";
	public nickName: string = "CullV";
	public category: string = "Mesh";
	public subCategory: string = "Util";
	public description: string = "Cull vertices from a mesh";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"mesh_m": CullVerticesInput_mesh_m,
		"pattern_p": CullVerticesInput_pattern_p,
		"shrink_s": CullVerticesInput_shrink_s,
	}

	public output:
	{
		"mesh_m": CullVerticesOutput_mesh_m,
	}

	constructor() {
		super();
		this.input = {
			"mesh_m": new CullVerticesInput_mesh_m(),
			"pattern_p": new CullVerticesInput_pattern_p(),
			"shrink_s": new CullVerticesInput_shrink_s(),
		}
		this.output = {
			"mesh_m": new CullVerticesOutput_mesh_m(),
		}
	}

}

class CullVerticesInput_mesh_m extends ResthopperParameter {

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

class CullVerticesInput_pattern_p extends ResthopperParameter {

	public name: string = "Pattern";
	public nickName: string = "P";
	public description: string = "Empty Boolean parameter"
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CullVerticesInput_shrink_s extends ResthopperParameter {

	public name: string = "Shrink";
	public nickName: string = "S";
	public description: string = "Empty Boolean parameter"
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CullVerticesOutput_mesh_m extends ResthopperParameter {

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
