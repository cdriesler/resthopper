import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MeshSplitPlane extends ResthopperComponent {

	public guid: string = "330eb9c9-0098-4375-9078-e00a419d49fb";
	public name: string = "MeshSplitPlane";
	public category: string = "Mesh";
	public subCategory: string = "Util";
	public description: string = "Split a mesh with an infinite plane.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Mesh_M": MeshSplitPlaneInput_Mesh_M,
		"Plane_P": MeshSplitPlaneInput_Plane_P,
	}

	public output:
	{
		"Above_A": MeshSplitPlaneOutput_Above_A,
		"Below_B": MeshSplitPlaneOutput_Below_B,
	}

	constructor() {
		super();
		this.input = {
			"Mesh_M": new MeshSplitPlaneInput_Mesh_M(),
			"Plane_P": new MeshSplitPlaneInput_Plane_P(),
		}
		this.output = {
			"Above_A": new MeshSplitPlaneOutput_Above_A(),
			"Below_B": new MeshSplitPlaneOutput_Below_B(),
		}
	}

}

class MeshSplitPlaneInput_Mesh_M extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshSplitPlaneInput_Plane_P extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshSplitPlaneOutput_Above_A extends ResthopperParameter {

	public name: string = "Above";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshSplitPlaneOutput_Below_B extends ResthopperParameter {

	public name: string = "Below";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
