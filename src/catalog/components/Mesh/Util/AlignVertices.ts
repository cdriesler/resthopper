import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class AlignVertices extends ResthopperComponent {

	public guid: string = "db661dd7-63a4-44c6-91f2-6faab2471383";
	public name: string = "AlignVertices";
	public category: string = "Mesh";
	public subCategory: string = "Util";
	public description: string = "Align nearby vertices in a mesh";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Mesh_M": AlignVerticesInput_Mesh_M,
		"Tolerance_T": AlignVerticesInput_Tolerance_T,
	}

	public output:
	{
		"Result_R": AlignVerticesOutput_Result_R,
		"Count_N": AlignVerticesOutput_Count_N,
	}

	constructor() {
		super();
		this.input = {
			"Mesh_M": new AlignVerticesInput_Mesh_M(),
			"Tolerance_T": new AlignVerticesInput_Tolerance_T(),
		}
		this.output = {
			"Result_R": new AlignVerticesOutput_Result_R(),
			"Count_N": new AlignVerticesOutput_Count_N(),
		}
	}

}

class AlignVerticesInput_Mesh_M extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AlignVerticesInput_Tolerance_T extends ResthopperParameter {

	public name: string = "Tolerance";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AlignVerticesOutput_Result_R extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AlignVerticesOutput_Count_N extends ResthopperParameter {

	public name: string = "Count";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
