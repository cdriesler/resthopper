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

	public library: string = "Surface Components";

	public input:
	{
		"Mesh_M": QuadrangulateInput_Mesh_M,
		"Angle_A": QuadrangulateInput_Angle_A,
		"Ratio_R": QuadrangulateInput_Ratio_R,
	}

	public output:
	{
		"Mesh_M": QuadrangulateOutput_Mesh_M,
		"Count_N": QuadrangulateOutput_Count_N,
	}

	constructor() {
		super();
		this.input = {
			"Mesh_M": new QuadrangulateInput_Mesh_M(),
			"Angle_A": new QuadrangulateInput_Angle_A(),
			"Ratio_R": new QuadrangulateInput_Ratio_R(),
		}
		this.output = {
			"Mesh_M": new QuadrangulateOutput_Mesh_M(),
			"Count_N": new QuadrangulateOutput_Count_N(),
		}
	}

}

class QuadrangulateInput_Mesh_M extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class QuadrangulateInput_Angle_A extends ResthopperParameter {

	public name: string = "Angle";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class QuadrangulateInput_Ratio_R extends ResthopperParameter {

	public name: string = "Ratio";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class QuadrangulateOutput_Mesh_M extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class QuadrangulateOutput_Count_N extends ResthopperParameter {

	public name: string = "Count";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
