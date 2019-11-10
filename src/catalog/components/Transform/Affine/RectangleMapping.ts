import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class RectangleMapping extends ResthopperComponent {

	public guid: string = "17d40004-489e-42d9-ad10-857f7b436801";
	public name: string = "RectangleMapping";
	public category: string = "Transform";
	public subCategory: string = "Affine";
	public description: string = "Transform geometry from one rectangle into another.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"Geometry_G": RectangleMappingInput_Geometry_G,
		"Source_S": RectangleMappingInput_Source_S,
		"Target_T": RectangleMappingInput_Target_T,
	}

	public output:
	{
		"Geometry_G": RectangleMappingOutput_Geometry_G,
		"Transform_X": RectangleMappingOutput_Transform_X,
	}

	constructor() {
		super();
		this.input = {
			"Geometry_G": new RectangleMappingInput_Geometry_G(),
			"Source_S": new RectangleMappingInput_Source_S(),
			"Target_T": new RectangleMappingInput_Target_T(),
		}
		this.output = {
			"Geometry_G": new RectangleMappingOutput_Geometry_G(),
			"Transform_X": new RectangleMappingOutput_Transform_X(),
		}
	}

}

class RectangleMappingInput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = true;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RectangleMappingInput_Source_S extends ResthopperParameter {

	public name: string = "Source";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Rectangle;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RectangleMappingInput_Target_T extends ResthopperParameter {

	public name: string = "Target";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Rectangle;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RectangleMappingOutput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RectangleMappingOutput_Transform_X extends ResthopperParameter {

	public name: string = "Transform";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Transform;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
