import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MeshSplitPlane extends ResthopperComponent {

	public guid: string = "330eb9c9-0098-4375-9078-e00a419d49fb";
	public name: string = "Mesh Split Plane";
	public nickName: string = "MSplit";
	public category: string = "Mesh";
	public subCategory: string = "Util";
	public description: string = "Split a mesh with an infinite plane.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"mesh_m": MeshSplitPlaneInput_mesh_m,
		"plane_p": MeshSplitPlaneInput_plane_p,
	}

	public output:
	{
		"above_a": MeshSplitPlaneOutput_above_a,
		"below_b": MeshSplitPlaneOutput_below_b,
	}

	constructor() {
		super();
		this.input = {
			"mesh_m": new MeshSplitPlaneInput_mesh_m(),
			"plane_p": new MeshSplitPlaneInput_plane_p(),
		}
		this.output = {
			"above_a": new MeshSplitPlaneOutput_above_a(),
			"below_b": new MeshSplitPlaneOutput_below_b(),
		}
	}

}

class MeshSplitPlaneInput_mesh_m extends ResthopperParameter {

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

class MeshSplitPlaneInput_plane_p extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public description: string = "Empty Plane parameter"
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshSplitPlaneOutput_above_a extends ResthopperParameter {

	public name: string = "Above";
	public nickName: string = "A";
	public description: string = "Empty Mesh parameter"
	public isOptional: boolean = false;
	public typeName: string = "Mesh"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshSplitPlaneOutput_below_b extends ResthopperParameter {

	public name: string = "Below";
	public nickName: string = "B";
	public description: string = "Empty Mesh parameter"
	public isOptional: boolean = false;
	public typeName: string = "Mesh"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
