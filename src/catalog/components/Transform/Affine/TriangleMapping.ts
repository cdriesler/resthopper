import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class TriangleMapping extends ResthopperComponent {

	public guid: string = "61d81100-c4d3-462d-8b51-d951c0ae32db";
	public name: string = "Triangle Mapping";
	public nickName: string = "TriMap";
	public category: string = "Transform";
	public subCategory: string = "Affine";
	public description: string = "Transform geometry from one triangle into another.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"geometry_g": TriangleMappingInput_geometry_g,
		"source_s": TriangleMappingInput_source_s,
		"target_t": TriangleMappingInput_target_t,
	}

	public output:
	{
		"geometry_g": TriangleMappingOutput_geometry_g,
		"transform_x": TriangleMappingOutput_transform_x,
	}

	constructor() {
		super();
		this.input = {
			"geometry_g": new TriangleMappingInput_geometry_g(),
			"source_s": new TriangleMappingInput_source_s(),
			"target_t": new TriangleMappingInput_target_t(),
		}
		this.output = {
			"geometry_g": new TriangleMappingOutput_geometry_g(),
			"transform_x": new TriangleMappingOutput_transform_x(),
		}
	}

}

class TriangleMappingInput_geometry_g extends ResthopperParameter {

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

class TriangleMappingInput_source_s extends ResthopperParameter {

	public name: string = "Source";
	public nickName: string = "S";
	public description: string = "Triangle to map from"
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TriangleMappingInput_target_t extends ResthopperParameter {

	public name: string = "Target";
	public nickName: string = "T";
	public description: string = "Triangle to map into"
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TriangleMappingOutput_geometry_g extends ResthopperParameter {

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

class TriangleMappingOutput_transform_x extends ResthopperParameter {

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
