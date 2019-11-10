import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class WeldMesh extends ResthopperComponent {

	public guid: string = "9f6d85c9-1143-4538-bca7-69dcb11a74ef";
	public name: string = "WeldMesh";
	public category: string = "Mesh";
	public subCategory: string = "Util";
	public description: string = "Weld (merge) creases in a mesh";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Mesh_M": WeldMeshInput_Mesh_M,
		"Angle_A": WeldMeshInput_Angle_A,
	}

	public output:
	{
		"Result_R": WeldMeshOutput_Result_R,
	}

	constructor() {
		super();
		this.input = {
			"Mesh_M": new WeldMeshInput_Mesh_M(),
			"Angle_A": new WeldMeshInput_Angle_A(),
		}
		this.output = {
			"Result_R": new WeldMeshOutput_Result_R(),
		}
	}

}

class WeldMeshInput_Mesh_M extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class WeldMeshInput_Angle_A extends ResthopperParameter {

	public name: string = "Angle";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class WeldMeshOutput_Result_R extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
