import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class AlignVertices extends ResthopperComponent {

	public guid: string = "db661dd7-63a4-44c6-91f2-6faab2471383";
	public name: string = "AlignVertices";
	public nickName: string = "AlignVert";
	public category: string = "Mesh";
	public subCategory: string = "Util";
	public description: string = "Align nearby vertices in a mesh";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"mesh_m": AlignVerticesInput_mesh_m,
		"tolerance_t": AlignVerticesInput_tolerance_t,
	}

	public output:
	{
		"result_r": AlignVerticesOutput_result_r,
		"count_n": AlignVerticesOutput_count_n,
	}

	constructor() {
		super();
		this.input = {
			"mesh_m": new AlignVerticesInput_mesh_m(),
			"tolerance_t": new AlignVerticesInput_tolerance_t(),
		}
		this.output = {
			"result_r": new AlignVerticesOutput_result_r(),
			"count_n": new AlignVerticesOutput_count_n(),
		}
	}

}

class AlignVerticesInput_mesh_m extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AlignVerticesInput_tolerance_t extends ResthopperParameter {

	public name: string = "Tolerance";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AlignVerticesOutput_result_r extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Mesh"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AlignVerticesOutput_count_n extends ResthopperParameter {

	public name: string = "Count";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
