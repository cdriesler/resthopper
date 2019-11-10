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
		"Mesh_M": MeshShadowInput_Mesh_M,
		"Light_L": MeshShadowInput_Light_L,
		"Plane_P": MeshShadowInput_Plane_P,
	}

	public output:
	{
		"Outlines_O": MeshShadowOutput_Outlines_O,
	}

	constructor() {
		super();
		this.input = {
			"Mesh_M": new MeshShadowInput_Mesh_M(),
			"Light_L": new MeshShadowInput_Light_L(),
			"Plane_P": new MeshShadowInput_Plane_P(),
		}
		this.output = {
			"Outlines_O": new MeshShadowOutput_Outlines_O(),
		}
	}

}

class MeshShadowInput_Mesh_M extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshShadowInput_Light_L extends ResthopperParameter {

	public name: string = "Light";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshShadowInput_Plane_P extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshShadowOutput_Outlines_O extends ResthopperParameter {

	public name: string = "Outlines";
	public nickName: string = "O";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
