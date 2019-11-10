import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MeshBox extends ResthopperComponent {

	public guid: string = "2696bd14-3fb5-4750-827f-86df6c31d664";
	public name: string = "MeshBox";
	public category: string = "Mesh";
	public subCategory: string = "Primitive";
	public description: string = "Create a mesh box.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Base_B": MeshBoxInput_Base_B,
		"XCount_X": MeshBoxInput_XCount_X,
		"YCount_Y": MeshBoxInput_YCount_Y,
		"ZCount_Z": MeshBoxInput_ZCount_Z,
	}

	public output:
	{
		"Mesh_M": MeshBoxOutput_Mesh_M,
	}

	constructor() {
		super();
		this.input = {
			"Base_B": new MeshBoxInput_Base_B(),
			"XCount_X": new MeshBoxInput_XCount_X(),
			"YCount_Y": new MeshBoxInput_YCount_Y(),
			"ZCount_Z": new MeshBoxInput_ZCount_Z(),
		}
		this.output = {
			"Mesh_M": new MeshBoxOutput_Mesh_M(),
		}
	}

}

class MeshBoxInput_Base_B extends ResthopperParameter {

	public name: string = "Base";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Box;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshBoxInput_XCount_X extends ResthopperParameter {

	public name: string = "XCount";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshBoxInput_YCount_Y extends ResthopperParameter {

	public name: string = "YCount";
	public nickName: string = "Y";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshBoxInput_ZCount_Z extends ResthopperParameter {

	public name: string = "ZCount";
	public nickName: string = "Z";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshBoxOutput_Mesh_M extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
