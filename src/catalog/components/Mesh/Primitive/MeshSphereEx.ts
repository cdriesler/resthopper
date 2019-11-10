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
		"Base_B": MeshSphereExInput_Base_B,
		"Radius_R": MeshSphereExInput_Radius_R,
		"Count_C": MeshSphereExInput_Count_C,
	}

	public output:
	{
		"Mesh_M": MeshSphereExOutput_Mesh_M,
	}

	constructor() {
		super();
		this.input = {
			"Base_B": new MeshSphereExInput_Base_B(),
			"Radius_R": new MeshSphereExInput_Radius_R(),
			"Count_C": new MeshSphereExInput_Count_C(),
		}
		this.output = {
			"Mesh_M": new MeshSphereExOutput_Mesh_M(),
		}
	}

}

class MeshSphereExInput_Base_B extends ResthopperParameter {

	public name: string = "Base";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshSphereExInput_Radius_R extends ResthopperParameter {

	public name: string = "Radius";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshSphereExInput_Count_C extends ResthopperParameter {

	public name: string = "Count";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshSphereExOutput_Mesh_M extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
