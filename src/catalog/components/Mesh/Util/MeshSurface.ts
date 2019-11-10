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

	public library: string = "Surface Components";

	public input:
	{
		"Surface_S": MeshSurfaceInput_Surface_S,
		"UCount_U": MeshSurfaceInput_UCount_U,
		"VCount_V": MeshSurfaceInput_VCount_V,
		"Overhang_H": MeshSurfaceInput_Overhang_H,
		"Equalize_Q": MeshSurfaceInput_Equalize_Q,
	}

	public output:
	{
		"Mesh_M": MeshSurfaceOutput_Mesh_M,
	}

	constructor() {
		super();
		this.input = {
			"Surface_S": new MeshSurfaceInput_Surface_S(),
			"UCount_U": new MeshSurfaceInput_UCount_U(),
			"VCount_V": new MeshSurfaceInput_VCount_V(),
			"Overhang_H": new MeshSurfaceInput_Overhang_H(),
			"Equalize_Q": new MeshSurfaceInput_Equalize_Q(),
		}
		this.output = {
			"Mesh_M": new MeshSurfaceOutput_Mesh_M(),
		}
	}

}

class MeshSurfaceInput_Surface_S extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Surface;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshSurfaceInput_UCount_U extends ResthopperParameter {

	public name: string = "UCount";
	public nickName: string = "U";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshSurfaceInput_VCount_V extends ResthopperParameter {

	public name: string = "VCount";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshSurfaceInput_Overhang_H extends ResthopperParameter {

	public name: string = "Overhang";
	public nickName: string = "H";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshSurfaceInput_Equalize_Q extends ResthopperParameter {

	public name: string = "Equalize";
	public nickName: string = "Q";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshSurfaceOutput_Mesh_M extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
