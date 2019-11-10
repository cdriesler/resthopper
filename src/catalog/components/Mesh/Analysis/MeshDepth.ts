import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MeshDepth extends ResthopperComponent {

	public guid: string = "07a3b2a0-c4d0-4638-9044-39ac4681e782";
	public name: string = "MeshDepth";
	public category: string = "Mesh";
	public subCategory: string = "Analysis";
	public description: string = "Validate the depth of a mesh.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Mesh_M": MeshDepthInput_Mesh_M,
		"Minimum_Min": MeshDepthInput_Minimum_Min,
		"Maximum_Max": MeshDepthInput_Maximum_Max,
	}

	public output:
	{
		"Mesh_M": MeshDepthOutput_Mesh_M,
		"Valid_V": MeshDepthOutput_Valid_V,
	}

	constructor() {
		super();
		this.input = {
			"Mesh_M": new MeshDepthInput_Mesh_M(),
			"Minimum_Min": new MeshDepthInput_Minimum_Min(),
			"Maximum_Max": new MeshDepthInput_Maximum_Max(),
		}
		this.output = {
			"Mesh_M": new MeshDepthOutput_Mesh_M(),
			"Valid_V": new MeshDepthOutput_Valid_V(),
		}
	}

}

class MeshDepthInput_Mesh_M extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshDepthInput_Minimum_Min extends ResthopperParameter {

	public name: string = "Minimum";
	public nickName: string = "Min";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshDepthInput_Maximum_Max extends ResthopperParameter {

	public name: string = "Maximum";
	public nickName: string = "Max";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshDepthOutput_Mesh_M extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshDepthOutput_Valid_V extends ResthopperParameter {

	public name: string = "Valid";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
