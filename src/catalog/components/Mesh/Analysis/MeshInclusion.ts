import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MeshInclusion extends ResthopperComponent {

	public guid: string = "01e3991d-18bd-474f-9fbd-076a8700159f";
	public name: string = "MeshInclusion";
	public category: string = "Mesh";
	public subCategory: string = "Analysis";
	public description: string = "Test a point for Mesh inclusion";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Mesh_M": MeshInclusionInput_Mesh_M,
		"Point_P": MeshInclusionInput_Point_P,
		"Strict_S": MeshInclusionInput_Strict_S,
	}

	public output:
	{
		"Inside_I": MeshInclusionOutput_Inside_I,
	}

	constructor() {
		super();
		this.input = {
			"Mesh_M": new MeshInclusionInput_Mesh_M(),
			"Point_P": new MeshInclusionInput_Point_P(),
			"Strict_S": new MeshInclusionInput_Strict_S(),
		}
		this.output = {
			"Inside_I": new MeshInclusionOutput_Inside_I(),
		}
	}

}

class MeshInclusionInput_Mesh_M extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshInclusionInput_Point_P extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshInclusionInput_Strict_S extends ResthopperParameter {

	public name: string = "Strict";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshInclusionOutput_Inside_I extends ResthopperParameter {

	public name: string = "Inside";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
