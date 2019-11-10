import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MeshSphere extends ResthopperComponent {

	public guid: string = "0a391eac-5048-443c-9c1b-f592299b6dd6";
	public name: string = "MeshSphere";
	public category: string = "Mesh";
	public subCategory: string = "Primitive";
	public description: string = "Create a mesh sphere.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"base_b": MeshSphereInput_base_b,
		"radius_r": MeshSphereInput_radius_r,
		"ucount_u": MeshSphereInput_ucount_u,
		"vcount_v": MeshSphereInput_vcount_v,
	}

	public output:
	{
		"mesh_m": MeshSphereOutput_mesh_m,
	}

	constructor() {
		super();
		this.input = {
			"base_b": new MeshSphereInput_base_b(),
			"radius_r": new MeshSphereInput_radius_r(),
			"ucount_u": new MeshSphereInput_ucount_u(),
			"vcount_v": new MeshSphereInput_vcount_v(),
		}
		this.output = {
			"mesh_m": new MeshSphereOutput_mesh_m(),
		}
	}

}

class MeshSphereInput_base_b extends ResthopperParameter {

	public name: string = "Base";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshSphereInput_radius_r extends ResthopperParameter {

	public name: string = "Radius";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshSphereInput_ucount_u extends ResthopperParameter {

	public name: string = "UCount";
	public nickName: string = "U";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshSphereInput_vcount_v extends ResthopperParameter {

	public name: string = "VCount";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshSphereOutput_mesh_m extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
