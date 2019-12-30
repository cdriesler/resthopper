import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MeshBox extends ResthopperComponent {

	public guid: string = "2696bd14-3fb5-4750-827f-86df6c31d664";
	public name: string = "Mesh Box";
	public nickName: string = "MBox";
	public category: string = "Mesh";
	public subCategory: string = "Primitive";
	public description: string = "Create a mesh box.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"base_b": MeshBoxInput_base_b,
		"xcount_x": MeshBoxInput_xcount_x,
		"ycount_y": MeshBoxInput_ycount_y,
		"zcount_z": MeshBoxInput_zcount_z,
	}

	public output:
	{
		"mesh_m": MeshBoxOutput_mesh_m,
	}

	constructor() {
		super();
		this.input = {
			"base_b": new MeshBoxInput_base_b(),
			"xcount_x": new MeshBoxInput_xcount_x(),
			"ycount_y": new MeshBoxInput_ycount_y(),
			"zcount_z": new MeshBoxInput_zcount_z(),
		}
		this.output = {
			"mesh_m": new MeshBoxOutput_mesh_m(),
		}
	}

}

class MeshBoxInput_base_b extends ResthopperParameter {

	public name: string = "Base";
	public nickName: string = "B";
	public description: string = "Base box"
	public isOptional: boolean = false;
	public typeName: string = "Box"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshBoxInput_xcount_x extends ResthopperParameter {

	public name: string = "XCount";
	public nickName: string = "X";
	public description: string = "Face count in {x} direction"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshBoxInput_ycount_y extends ResthopperParameter {

	public name: string = "YCount";
	public nickName: string = "Y";
	public description: string = "Face count in {y} direction"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshBoxInput_zcount_z extends ResthopperParameter {

	public name: string = "ZCount";
	public nickName: string = "Z";
	public description: string = "Face count in {z} direction"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshBoxOutput_mesh_m extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public description: string = "The 3D mesh box"
	public isOptional: boolean = false;
	public typeName: string = "Mesh"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
