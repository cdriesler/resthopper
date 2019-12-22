import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class RectangleMapping extends ResthopperComponent {

	public guid: string = "17d40004-489e-42d9-ad10-857f7b436801";
	public name: string = "Rectangle Mapping";
	public nickName: string = "RecMap";
	public category: string = "Transform";
	public subCategory: string = "Affine";
	public description: string = "Transform geometry from one rectangle into another.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"geometry_g": RectangleMappingInput_geometry_g,
		"source_s": RectangleMappingInput_source_s,
		"target_t": RectangleMappingInput_target_t,
	}

	public output:
	{
		"geometry_g": RectangleMappingOutput_geometry_g,
		"transform_x": RectangleMappingOutput_transform_x,
	}

	constructor() {
		super();
		this.input = {
			"geometry_g": new RectangleMappingInput_geometry_g(),
			"source_s": new RectangleMappingInput_source_s(),
			"target_t": new RectangleMappingInput_target_t(),
		}
		this.output = {
			"geometry_g": new RectangleMappingOutput_geometry_g(),
			"transform_x": new RectangleMappingOutput_transform_x(),
		}
	}

}

class RectangleMappingInput_geometry_g extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public description: string = "Empty Geometry parameter"
	public isOptional: boolean = true;
	public typeName: string = "Geometry"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RectangleMappingInput_source_s extends ResthopperParameter {

	public name: string = "Source";
	public nickName: string = "S";
	public description: string = "Empty Rectangle parameter"
	public isOptional: boolean = false;
	public typeName: string = "Rectangle"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RectangleMappingInput_target_t extends ResthopperParameter {

	public name: string = "Target";
	public nickName: string = "T";
	public description: string = "Empty Rectangle parameter"
	public isOptional: boolean = false;
	public typeName: string = "Rectangle"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RectangleMappingOutput_geometry_g extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public description: string = "Empty Geometry parameter"
	public isOptional: boolean = false;
	public typeName: string = "Geometry"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RectangleMappingOutput_transform_x extends ResthopperParameter {

	public name: string = "Transform";
	public nickName: string = "X";
	public description: string = "Empty Transform parameter"
	public isOptional: boolean = false;
	public typeName: string = "Transform"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
