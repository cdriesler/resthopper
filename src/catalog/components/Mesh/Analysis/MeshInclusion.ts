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
		"mesh_m": MeshInclusionInput_mesh_m,
		"point_p": MeshInclusionInput_point_p,
		"strict_s": MeshInclusionInput_strict_s,
	}

	public output:
	{
		"inside_i": MeshInclusionOutput_inside_i,
	}

	constructor() {
		super();
		this.input = {
			"mesh_m": new MeshInclusionInput_mesh_m(),
			"point_p": new MeshInclusionInput_point_p(),
			"strict_s": new MeshInclusionInput_strict_s(),
		}
		this.output = {
			"inside_i": new MeshInclusionOutput_inside_i(),
		}
	}

}

class MeshInclusionInput_mesh_m extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshInclusionInput_point_p extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshInclusionInput_strict_s extends ResthopperParameter {

	public name: string = "Strict";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshInclusionOutput_inside_i extends ResthopperParameter {

	public name: string = "Inside";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
