import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MeshClosestPoint extends ResthopperComponent {

	public guid: string = "a559fee2-4b76-4370-8042-c7440cd75049";
	public name: string = "MeshClosestPoint";
	public nickName: string = "MeshCP";
	public category: string = "Mesh";
	public subCategory: string = "Analysis";
	public description: string = "Finds the closest point on a mesh";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"point_p": MeshClosestPointInput_point_p,
		"mesh_m": MeshClosestPointInput_mesh_m,
	}

	public output:
	{
		"parameter_p": MeshClosestPointOutput_parameter_p,
		"index_i": MeshClosestPointOutput_index_i,
	}

	constructor() {
		super();
		this.input = {
			"point_p": new MeshClosestPointInput_point_p(),
			"mesh_m": new MeshClosestPointInput_mesh_m(),
		}
		this.output = {
			"parameter_p": new MeshClosestPointOutput_parameter_p(),
			"index_i": new MeshClosestPointOutput_index_i(),
		}
	}

}

class MeshClosestPointInput_point_p extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshClosestPointInput_mesh_m extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshClosestPointOutput_parameter_p extends ResthopperParameter {

	public name: string = "Parameter";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Mesh Parameter"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshClosestPointOutput_index_i extends ResthopperParameter {

	public name: string = "Index";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
