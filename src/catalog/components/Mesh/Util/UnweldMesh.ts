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
		"mesh_m": UnweldMeshInput_mesh_m,
		"angle_a": UnweldMeshInput_angle_a,
	}

	public output:
	{
		"result_r": UnweldMeshOutput_result_r,
	}

	constructor() {
		super();
		this.input = {
			"mesh_m": new UnweldMeshInput_mesh_m(),
			"angle_a": new UnweldMeshInput_angle_a(),
		}
		this.output = {
			"result_r": new UnweldMeshOutput_result_r(),
		}
	}

}

class UnweldMeshInput_mesh_m extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class UnweldMeshInput_angle_a extends ResthopperParameter {

	public name: string = "Angle";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class UnweldMeshOutput_result_r extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Mesh"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
