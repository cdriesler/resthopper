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
		"Mesh_M": MeshEvalInput_Mesh_M,
		"Parameter_P": MeshEvalInput_Parameter_P,
	}

	public output:
	{
		"Point_P": MeshEvalOutput_Point_P,
		"Normal_N": MeshEvalOutput_Normal_N,
		"Colour_C": MeshEvalOutput_Colour_C,
	}

	constructor() {
		super();
		this.input = {
			"Mesh_M": new MeshEvalInput_Mesh_M(),
			"Parameter_P": new MeshEvalInput_Parameter_P(),
		}
		this.output = {
			"Point_P": new MeshEvalOutput_Point_P(),
			"Normal_N": new MeshEvalOutput_Normal_N(),
			"Colour_C": new MeshEvalOutput_Colour_C(),
		}
	}

}

class MeshEvalInput_Mesh_M extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshEvalInput_Parameter_P extends ResthopperParameter {

	public name: string = "Parameter";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Mesh Parameter;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshEvalOutput_Point_P extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshEvalOutput_Normal_N extends ResthopperParameter {

	public name: string = "Normal";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshEvalOutput_Colour_C extends ResthopperParameter {

	public name: string = "Colour";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Colour;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
