import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class UnweldMesh extends ResthopperComponent {

	public guid: string = "47814a17-ca9e-4305-9400-3a9c8d71c19d";
	public name: string = "UnweldMesh";
	public category: string = "Mesh";
	public subCategory: string = "Util";
	public description: string = "Unweld (split) creases in a mesh";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Mesh_M": UnweldMeshInput_Mesh_M,
		"Angle_A": UnweldMeshInput_Angle_A,
	}

	public output:
	{
		"Result_R": UnweldMeshOutput_Result_R,
	}

	constructor() {
		super();
		this.input = {
			"Mesh_M": new UnweldMeshInput_Mesh_M(),
			"Angle_A": new UnweldMeshInput_Angle_A(),
		}
		this.output = {
			"Result_R": new UnweldMeshOutput_Result_R(),
		}
	}

}

class UnweldMeshInput_Mesh_M extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class UnweldMeshInput_Angle_A extends ResthopperParameter {

	public name: string = "Angle";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class UnweldMeshOutput_Result_R extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
