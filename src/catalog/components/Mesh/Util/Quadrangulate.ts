import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Quadrangulate extends ResthopperComponent {

	public guid: string = "9266a2bb-918f-4675-9c91-f67d0dd33eac";
	public name: string = "Quadrangulate";
	public category: string = "Mesh";
	public subCategory: string = "Util";
	public description: string = "Quadrangulate as many triangles as possible in a mesh";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"mesh_m": QuadrangulateInput_mesh_m,
		"angle_a": QuadrangulateInput_angle_a,
		"ratio_r": QuadrangulateInput_ratio_r,
	}

	public output:
	{
		"mesh_m": QuadrangulateOutput_mesh_m,
		"count_n": QuadrangulateOutput_count_n,
	}

	constructor() {
		super();
		this.input = {
			"mesh_m": new QuadrangulateInput_mesh_m(),
			"angle_a": new QuadrangulateInput_angle_a(),
			"ratio_r": new QuadrangulateInput_ratio_r(),
		}
		this.output = {
			"mesh_m": new QuadrangulateOutput_mesh_m(),
			"count_n": new QuadrangulateOutput_count_n(),
		}
	}

}

class QuadrangulateInput_mesh_m extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class QuadrangulateInput_angle_a extends ResthopperParameter {

	public name: string = "Angle";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class QuadrangulateInput_ratio_r extends ResthopperParameter {

	public name: string = "Ratio";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class QuadrangulateOutput_mesh_m extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class QuadrangulateOutput_count_n extends ResthopperParameter {

	public name: string = "Count";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
