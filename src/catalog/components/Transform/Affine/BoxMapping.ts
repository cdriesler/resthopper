import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class BoxMapping extends ResthopperComponent {

	public guid: string = "8465bcce-9e0a-4cf4-bbda-1a7ce5681e10";
	public name: string = "BoxMapping";
	public category: string = "Transform";
	public subCategory: string = "Affine";
	public description: string = "Transform geometry from one box into another.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"Geometry_G": BoxMappingInput_Geometry_G,
		"Source_S": BoxMappingInput_Source_S,
		"Target_T": BoxMappingInput_Target_T,
	}

	public output:
	{
		"Geometry_G": BoxMappingOutput_Geometry_G,
		"Transform_X": BoxMappingOutput_Transform_X,
	}

	constructor() {
		super();
		this.input = {
			"Geometry_G": new BoxMappingInput_Geometry_G(),
			"Source_S": new BoxMappingInput_Source_S(),
			"Target_T": new BoxMappingInput_Target_T(),
		}
		this.output = {
			"Geometry_G": new BoxMappingOutput_Geometry_G(),
			"Transform_X": new BoxMappingOutput_Transform_X(),
		}
	}

}

class BoxMappingInput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = true;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BoxMappingInput_Source_S extends ResthopperParameter {

	public name: string = "Source";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Box;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BoxMappingInput_Target_T extends ResthopperParameter {

	public name: string = "Target";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Box;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BoxMappingOutput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BoxMappingOutput_Transform_X extends ResthopperParameter {

	public name: string = "Transform";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Transform;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
