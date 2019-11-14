import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class WeldMesh extends ResthopperComponent {

	public guid: string = "9f6d85c9-1143-4538-bca7-69dcb11a74ef";
	public name: string = "WeldMesh";
	public nickName: string = "Weld";
	public category: string = "Mesh";
	public subCategory: string = "Util";
	public description: string = "Weld (merge) creases in a mesh";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"mesh_m": WeldMeshInput_mesh_m,
		"angle_a": WeldMeshInput_angle_a,
	}

	public output:
	{
		"result_r": WeldMeshOutput_result_r,
	}

	constructor() {
		super();
		this.input = {
			"mesh_m": new WeldMeshInput_mesh_m(),
			"angle_a": new WeldMeshInput_angle_a(),
		}
		this.output = {
			"result_r": new WeldMeshOutput_result_r(),
		}
	}

}

class WeldMeshInput_mesh_m extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class WeldMeshInput_angle_a extends ResthopperParameter {

	public name: string = "Angle";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class WeldMeshOutput_result_r extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Mesh"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
