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
		"mesh_m": SubDfromMeshInput_mesh_m,
		"creases_cr": SubDfromMeshInput_creases_cr,
		"corners_co": SubDfromMeshInput_corners_co,
		"interpolate_i": SubDfromMeshInput_interpolate_i,
	}

	public output:
	{
		"subd_s": SubDfromMeshOutput_subd_s,
	}

	constructor() {
		super();
		this.input = {
			"mesh_m": new SubDfromMeshInput_mesh_m(),
			"creases_cr": new SubDfromMeshInput_creases_cr(),
			"corners_co": new SubDfromMeshInput_corners_co(),
			"interpolate_i": new SubDfromMeshInput_interpolate_i(),
		}
		this.output = {
			"subd_s": new SubDfromMeshOutput_subd_s(),
		}
	}

}

class SubDfromMeshInput_mesh_m extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SubDfromMeshInput_creases_cr extends ResthopperParameter {

	public name: string = "Creases";
	public nickName: string = "Cr";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SubDfromMeshInput_corners_co extends ResthopperParameter {

	public name: string = "Corners";
	public nickName: string = "Co";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SubDfromMeshInput_interpolate_i extends ResthopperParameter {

	public name: string = "Interpolate";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SubDfromMeshOutput_subd_s extends ResthopperParameter {

	public name: string = "SubD";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "SubD;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
