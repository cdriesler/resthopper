import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MeshSpray extends ResthopperComponent {

	public guid: string = "edcf10e1-02a0-48a4-ae2d-70c50d903dc8";
	public name: string = "Mesh Spray";
	public nickName: string = "MSpray";
	public category: string = "Mesh";
	public subCategory: string = "Primitive";
	public description: string = "Assign colours to a mesh based on spray points.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"mesh_m": MeshSprayInput_mesh_m,
		"points_p": MeshSprayInput_points_p,
		"colours_c": MeshSprayInput_colours_c,
	}

	public output:
	{
		"mesh_m": MeshSprayOutput_mesh_m,
	}

	constructor() {
		super();
		this.input = {
			"mesh_m": new MeshSprayInput_mesh_m(),
			"points_p": new MeshSprayInput_points_p(),
			"colours_c": new MeshSprayInput_colours_c(),
		}
		this.output = {
			"mesh_m": new MeshSprayOutput_mesh_m(),
		}
	}

}

class MeshSprayInput_mesh_m extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public description: string = "Base mesh"
	public isOptional: boolean = false;
	public typeName: string = "Mesh"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshSprayInput_points_p extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public description: string = "Spray points"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshSprayInput_colours_c extends ResthopperParameter {

	public name: string = "Colours";
	public nickName: string = "C";
	public description: string = "Colours of spray points"
	public isOptional: boolean = false;
	public typeName: string = "Colour"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshSprayOutput_mesh_m extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public description: string = "Sprayed mesh"
	public isOptional: boolean = false;
	public typeName: string = "Mesh"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
