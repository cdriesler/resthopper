import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MeshSurface extends ResthopperComponent {

	public guid: string = "58cf422f-19f7-42f7-9619-fc198c51c657";
	public name: string = "MeshSurface";
	public category: string = "Mesh";
	public subCategory: string = "Util";
	public description: string = "Create a Surface UV mesh";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"surface_s": MeshSurfaceInput_surface_s,
		"ucount_u": MeshSurfaceInput_ucount_u,
		"vcount_v": MeshSurfaceInput_vcount_v,
		"overhang_h": MeshSurfaceInput_overhang_h,
		"equalize_q": MeshSurfaceInput_equalize_q,
	}

	public output:
	{
		"mesh_m": MeshSurfaceOutput_mesh_m,
	}

	constructor() {
		super();
		this.input = {
			"surface_s": new MeshSurfaceInput_surface_s(),
			"ucount_u": new MeshSurfaceInput_ucount_u(),
			"vcount_v": new MeshSurfaceInput_vcount_v(),
			"overhang_h": new MeshSurfaceInput_overhang_h(),
			"equalize_q": new MeshSurfaceInput_equalize_q(),
		}
		this.output = {
			"mesh_m": new MeshSurfaceOutput_mesh_m(),
		}
	}

}

class MeshSurfaceInput_surface_s extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Surface"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshSurfaceInput_ucount_u extends ResthopperParameter {

	public name: string = "UCount";
	public nickName: string = "U";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshSurfaceInput_vcount_v extends ResthopperParameter {

	public name: string = "VCount";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshSurfaceInput_overhang_h extends ResthopperParameter {

	public name: string = "Overhang";
	public nickName: string = "H";
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshSurfaceInput_equalize_q extends ResthopperParameter {

	public name: string = "Equalize";
	public nickName: string = "Q";
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshSurfaceOutput_mesh_m extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
