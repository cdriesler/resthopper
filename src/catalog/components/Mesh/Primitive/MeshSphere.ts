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
		"Base_B": MeshSphereInput_Base_B,
		"Radius_R": MeshSphereInput_Radius_R,
		"UCount_U": MeshSphereInput_UCount_U,
		"VCount_V": MeshSphereInput_VCount_V,
	}

	public output:
	{
		"Mesh_M": MeshSphereOutput_Mesh_M,
	}

	constructor() {
		super();
		this.input = {
			"Base_B": new MeshSphereInput_Base_B(),
			"Radius_R": new MeshSphereInput_Radius_R(),
			"UCount_U": new MeshSphereInput_UCount_U(),
			"VCount_V": new MeshSphereInput_VCount_V(),
		}
		this.output = {
			"Mesh_M": new MeshSphereOutput_Mesh_M(),
		}
	}

}

class MeshSphereInput_Base_B extends ResthopperParameter {

	public name: string = "Base";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshSphereInput_Radius_R extends ResthopperParameter {

	public name: string = "Radius";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshSphereInput_UCount_U extends ResthopperParameter {

	public name: string = "UCount";
	public nickName: string = "U";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshSphereInput_VCount_V extends ResthopperParameter {

	public name: string = "VCount";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshSphereOutput_Mesh_M extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
