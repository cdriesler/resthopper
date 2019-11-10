import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SubDfromMesh extends ResthopperComponent {

	public guid: string = "855a2c73-31c0-41d2-b061-57d54229d11b";
	public name: string = "SubDfromMesh";
	public category: string = "Surface";
	public subCategory: string = "SubD";
	public description: string = "Create a subdivision surface from a control mesh";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"Mesh_M": SubDfromMeshInput_Mesh_M,
		"Creases_Cr": SubDfromMeshInput_Creases_Cr,
		"Corners_Co": SubDfromMeshInput_Corners_Co,
		"Interpolate_I": SubDfromMeshInput_Interpolate_I,
	}

	public output:
	{
		"SubD_S": SubDfromMeshOutput_SubD_S,
	}

	constructor() {
		super();
		this.input = {
			"Mesh_M": new SubDfromMeshInput_Mesh_M(),
			"Creases_Cr": new SubDfromMeshInput_Creases_Cr(),
			"Corners_Co": new SubDfromMeshInput_Corners_Co(),
			"Interpolate_I": new SubDfromMeshInput_Interpolate_I(),
		}
		this.output = {
			"SubD_S": new SubDfromMeshOutput_SubD_S(),
		}
	}

}

class SubDfromMeshInput_Mesh_M extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SubDfromMeshInput_Creases_Cr extends ResthopperParameter {

	public name: string = "Creases";
	public nickName: string = "Cr";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SubDfromMeshInput_Corners_Co extends ResthopperParameter {

	public name: string = "Corners";
	public nickName: string = "Co";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SubDfromMeshInput_Interpolate_I extends ResthopperParameter {

	public name: string = "Interpolate";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SubDfromMeshOutput_SubD_S extends ResthopperParameter {

	public name: string = "SubD";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "SubD;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
