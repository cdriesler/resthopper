import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class TriangleMapping extends ResthopperComponent {

	public guid: string = "61d81100-c4d3-462d-8b51-d951c0ae32db";
	public name: string = "TriangleMapping";
	public category: string = "Transform";
	public subCategory: string = "Affine";
	public description: string = "Transform geometry from one triangle into another.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"Geometry_G": TriangleMappingInput_Geometry_G,
		"Source_S": TriangleMappingInput_Source_S,
		"Target_T": TriangleMappingInput_Target_T,
	}

	public output:
	{
		"Geometry_G": TriangleMappingOutput_Geometry_G,
		"Transform_X": TriangleMappingOutput_Transform_X,
	}

	constructor() {
		super();
		this.input = {
			"Geometry_G": new TriangleMappingInput_Geometry_G(),
			"Source_S": new TriangleMappingInput_Source_S(),
			"Target_T": new TriangleMappingInput_Target_T(),
		}
		this.output = {
			"Geometry_G": new TriangleMappingOutput_Geometry_G(),
			"Transform_X": new TriangleMappingOutput_Transform_X(),
		}
	}

}

class TriangleMappingInput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = true;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TriangleMappingInput_Source_S extends ResthopperParameter {

	public name: string = "Source";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TriangleMappingInput_Target_T extends ResthopperParameter {

	public name: string = "Target";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TriangleMappingOutput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TriangleMappingOutput_Transform_X extends ResthopperParameter {

	public name: string = "Transform";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Transform;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
