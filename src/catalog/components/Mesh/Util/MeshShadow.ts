import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MeshShadow extends ResthopperComponent {

	public guid: string = "c3dce3e8-c9cc-413c-a93f-732434282fdd";
	public name: string = "MeshShadow";
	public category: string = "Mesh";
	public subCategory: string = "Util";
	public description: string = "Compute the shadow outline for a mesh object";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"mesh_m": MeshShadowInput_mesh_m,
		"light_l": MeshShadowInput_light_l,
		"plane_p": MeshShadowInput_plane_p,
	}

	public output:
	{
		"outlines_o": MeshShadowOutput_outlines_o,
	}

	constructor() {
		super();
		this.input = {
			"mesh_m": new MeshShadowInput_mesh_m(),
			"light_l": new MeshShadowInput_light_l(),
			"plane_p": new MeshShadowInput_plane_p(),
		}
		this.output = {
			"outlines_o": new MeshShadowOutput_outlines_o(),
		}
	}

}

class MeshShadowInput_mesh_m extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshShadowInput_light_l extends ResthopperParameter {

	public name: string = "Light";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshShadowInput_plane_p extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshShadowOutput_outlines_o extends ResthopperParameter {

	public name: string = "Outlines";
	public nickName: string = "O";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
