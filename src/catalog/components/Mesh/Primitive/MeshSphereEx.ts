import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MeshSphereEx extends ResthopperComponent {

	public guid: string = "76f85ee4-5a88-4511-8ba7-30df07e50533";
	public name: string = "MeshSphereEx";
	public category: string = "Mesh";
	public subCategory: string = "Primitive";
	public description: string = "Create a mesh sphere from square patches.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"base_b": MeshSphereExInput_base_b,
		"radius_r": MeshSphereExInput_radius_r,
		"count_c": MeshSphereExInput_count_c,
	}

	public output:
	{
		"mesh_m": MeshSphereExOutput_mesh_m,
	}

	constructor() {
		super();
		this.input = {
			"base_b": new MeshSphereExInput_base_b(),
			"radius_r": new MeshSphereExInput_radius_r(),
			"count_c": new MeshSphereExInput_count_c(),
		}
		this.output = {
			"mesh_m": new MeshSphereExOutput_mesh_m(),
		}
	}

}

class MeshSphereExInput_base_b extends ResthopperParameter {

	public name: string = "Base";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshSphereExInput_radius_r extends ResthopperParameter {

	public name: string = "Radius";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshSphereExInput_count_c extends ResthopperParameter {

	public name: string = "Count";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshSphereExOutput_mesh_m extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
