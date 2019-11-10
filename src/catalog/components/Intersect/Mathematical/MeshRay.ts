import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MeshRay extends ResthopperComponent {

	public guid: string = "4c02a168-9aba-4f42-8951-2719f24d391f";
	public name: string = "MeshRay";
	public category: string = "Intersect";
	public subCategory: string = "Mathematical";
	public description: string = "Intersect a mesh with a semi-infinite ray";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Mesh_M": MeshRayInput_Mesh_M,
		"Point_P": MeshRayInput_Point_P,
		"Direction_D": MeshRayInput_Direction_D,
	}

	public output:
	{
		"Point_X": MeshRayOutput_Point_X,
		"Hit_H": MeshRayOutput_Hit_H,
	}

	constructor() {
		super();
		this.input = {
			"Mesh_M": new MeshRayInput_Mesh_M(),
			"Point_P": new MeshRayInput_Point_P(),
			"Direction_D": new MeshRayInput_Direction_D(),
		}
		this.output = {
			"Point_X": new MeshRayOutput_Point_X(),
			"Hit_H": new MeshRayOutput_Hit_H(),
		}
	}

}

class MeshRayInput_Mesh_M extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshRayInput_Point_P extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshRayInput_Direction_D extends ResthopperParameter {

	public name: string = "Direction";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshRayOutput_Point_X extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshRayOutput_Hit_H extends ResthopperParameter {

	public name: string = "Hit";
	public nickName: string = "H";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
