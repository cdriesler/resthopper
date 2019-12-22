import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MeshDepth extends ResthopperComponent {

	public guid: string = "07a3b2a0-c4d0-4638-9044-39ac4681e782";
	public name: string = "Mesh Depth";
	public nickName: string = "MDepth";
	public category: string = "Mesh";
	public subCategory: string = "Analysis";
	public description: string = "Validate the depth of a mesh.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"mesh_m": MeshDepthInput_mesh_m,
		"minimum_min": MeshDepthInput_minimum_min,
		"maximum_max": MeshDepthInput_maximum_max,
	}

	public output:
	{
		"mesh_m": MeshDepthOutput_mesh_m,
		"valid_v": MeshDepthOutput_valid_v,
	}

	constructor() {
		super();
		this.input = {
			"mesh_m": new MeshDepthInput_mesh_m(),
			"minimum_min": new MeshDepthInput_minimum_min(),
			"maximum_max": new MeshDepthInput_maximum_max(),
		}
		this.output = {
			"mesh_m": new MeshDepthOutput_mesh_m(),
			"valid_v": new MeshDepthOutput_valid_v(),
		}
	}

}

class MeshDepthInput_mesh_m extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public description: string = "Empty Mesh parameter"
	public isOptional: boolean = false;
	public typeName: string = "Mesh"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshDepthInput_minimum_min extends ResthopperParameter {

	public name: string = "Minimum";
	public nickName: string = "Min";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshDepthInput_maximum_max extends ResthopperParameter {

	public name: string = "Maximum";
	public nickName: string = "Max";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshDepthOutput_mesh_m extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public description: string = "Empty Mesh parameter"
	public isOptional: boolean = false;
	public typeName: string = "Mesh"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshDepthOutput_valid_v extends ResthopperParameter {

	public name: string = "Valid";
	public nickName: string = "V";
	public description: string = "Empty Boolean parameter"
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
