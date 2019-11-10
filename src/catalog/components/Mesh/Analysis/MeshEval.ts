import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MeshEval extends ResthopperComponent {

	public guid: string = "b2dc090f-b022-4264-8889-87e22979336e";
	public name: string = "MeshEval";
	public category: string = "Mesh";
	public subCategory: string = "Analysis";
	public description: string = "Evaluate a mesh at a given parameter";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"mesh_m": MeshEvalInput_mesh_m,
		"parameter_p": MeshEvalInput_parameter_p,
	}

	public output:
	{
		"point_p": MeshEvalOutput_point_p,
		"normal_n": MeshEvalOutput_normal_n,
		"colour_c": MeshEvalOutput_colour_c,
	}

	constructor() {
		super();
		this.input = {
			"mesh_m": new MeshEvalInput_mesh_m(),
			"parameter_p": new MeshEvalInput_parameter_p(),
		}
		this.output = {
			"point_p": new MeshEvalOutput_point_p(),
			"normal_n": new MeshEvalOutput_normal_n(),
			"colour_c": new MeshEvalOutput_colour_c(),
		}
	}

}

class MeshEvalInput_mesh_m extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshEvalInput_parameter_p extends ResthopperParameter {

	public name: string = "Parameter";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Mesh Parameter;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshEvalOutput_point_p extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshEvalOutput_normal_n extends ResthopperParameter {

	public name: string = "Normal";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshEvalOutput_colour_c extends ResthopperParameter {

	public name: string = "Colour";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Colour;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
