import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MeshRay extends ResthopperComponent {

	public guid: string = "4c02a168-9aba-4f42-8951-2719f24d391f";
	public name: string = "Mesh | Ray";
	public nickName: string = "MeshRay";
	public category: string = "Intersect";
	public subCategory: string = "Mathematical";
	public description: string = "Intersect a mesh with a semi-infinite ray";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"mesh_m": MeshRayInput_mesh_m,
		"point_p": MeshRayInput_point_p,
		"direction_d": MeshRayInput_direction_d,
	}

	public output:
	{
		"point_x": MeshRayOutput_point_x,
		"hit_h": MeshRayOutput_hit_h,
	}

	constructor() {
		super();
		this.input = {
			"mesh_m": new MeshRayInput_mesh_m(),
			"point_p": new MeshRayInput_point_p(),
			"direction_d": new MeshRayInput_direction_d(),
		}
		this.output = {
			"point_x": new MeshRayOutput_point_x(),
			"hit_h": new MeshRayOutput_hit_h(),
		}
	}

}

class MeshRayInput_mesh_m extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public description: string = "Empty Mesh parameter"
	public isOptional: boolean = false;
	public typeName: string = "Mesh"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshRayInput_point_p extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public description: string = "Empty Point parameter"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshRayInput_direction_d extends ResthopperParameter {

	public name: string = "Direction";
	public nickName: string = "D";
	public description: string = "Empty Vector parameter"
	public isOptional: boolean = false;
	public typeName: string = "Vector"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshRayOutput_point_x extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "X";
	public description: string = "Empty Point parameter"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshRayOutput_hit_h extends ResthopperParameter {

	public name: string = "Hit";
	public nickName: string = "H";
	public description: string = "Empty Boolean parameter"
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
