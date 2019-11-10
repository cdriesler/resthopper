import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MeshClosestPoint extends ResthopperComponent {

	public guid: string = "a559fee2-4b76-4370-8042-c7440cd75049";
	public name: string = "MeshClosestPoint";
	public category: string = "Mesh";
	public subCategory: string = "Analysis";
	public description: string = "Finds the closest point on a mesh";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Point_P": MeshClosestPointInput_Point_P,
		"Mesh_M": MeshClosestPointInput_Mesh_M,
	}

	public output:
	{
		"Parameter_P": MeshClosestPointOutput_Parameter_P,
		"Index_I": MeshClosestPointOutput_Index_I,
	}

	constructor() {
		super();
		this.input = {
			"Point_P": new MeshClosestPointInput_Point_P(),
			"Mesh_M": new MeshClosestPointInput_Mesh_M(),
		}
		this.output = {
			"Parameter_P": new MeshClosestPointOutput_Parameter_P(),
			"Index_I": new MeshClosestPointOutput_Index_I(),
		}
	}

}

class MeshClosestPointInput_Point_P extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshClosestPointInput_Mesh_M extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshClosestPointOutput_Parameter_P extends ResthopperParameter {

	public name: string = "Parameter";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Mesh Parameter;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshClosestPointOutput_Index_I extends ResthopperParameter {

	public name: string = "Index";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
