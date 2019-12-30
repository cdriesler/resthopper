import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class BoxMapping extends ResthopperComponent {

	public guid: string = "8465bcce-9e0a-4cf4-bbda-1a7ce5681e10";
	public name: string = "Box Mapping";
	public nickName: string = "BoxMap";
	public category: string = "Transform";
	public subCategory: string = "Affine";
	public description: string = "Transform geometry from one box into another.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"geometry_g": BoxMappingInput_geometry_g,
		"source_s": BoxMappingInput_source_s,
		"target_t": BoxMappingInput_target_t,
	}

	public output:
	{
		"geometry_g": BoxMappingOutput_geometry_g,
		"transform_x": BoxMappingOutput_transform_x,
	}

	constructor() {
		super();
		this.input = {
			"geometry_g": new BoxMappingInput_geometry_g(),
			"source_s": new BoxMappingInput_source_s(),
			"target_t": new BoxMappingInput_target_t(),
		}
		this.output = {
			"geometry_g": new BoxMappingOutput_geometry_g(),
			"transform_x": new BoxMappingOutput_transform_x(),
		}
	}

}

class BoxMappingInput_geometry_g extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public description: string = "Base geometry"
	public isOptional: boolean = true;
	public typeName: string = "Geometry"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BoxMappingInput_source_s extends ResthopperParameter {

	public name: string = "Source";
	public nickName: string = "S";
	public description: string = "Box to map from"
	public isOptional: boolean = false;
	public typeName: string = "Box"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BoxMappingInput_target_t extends ResthopperParameter {

	public name: string = "Target";
	public nickName: string = "T";
	public description: string = "Box to map into"
	public isOptional: boolean = false;
	public typeName: string = "Box"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BoxMappingOutput_geometry_g extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public description: string = "Mapped geometry"
	public isOptional: boolean = false;
	public typeName: string = "Geometry"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BoxMappingOutput_transform_x extends ResthopperParameter {

	public name: string = "Transform";
	public nickName: string = "X";
	public description: string = "Transformation data"
	public isOptional: boolean = false;
	public typeName: string = "Transform"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
