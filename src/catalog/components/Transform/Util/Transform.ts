import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Transform extends ResthopperComponent {

	public guid: string = "610e689b-5adc-47b3-af8f-e3a32b7ea341";
	public name: string = "Transform";
	public nickName: string = "Transform";
	public category: string = "Transform";
	public subCategory: string = "Util";
	public description: string = "Transform an object.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"geometry_g": TransformInput_geometry_g,
		"transform_t": TransformInput_transform_t,
	}

	public output:
	{
		"geometry_g": TransformOutput_geometry_g,
	}

	constructor() {
		super();
		this.input = {
			"geometry_g": new TransformInput_geometry_g(),
			"transform_t": new TransformInput_transform_t(),
		}
		this.output = {
			"geometry_g": new TransformOutput_geometry_g(),
		}
	}

}

class TransformInput_geometry_g extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public description: string = "Base geometry"
	public isOptional: boolean = false;
	public typeName: string = "Geometry"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TransformInput_transform_t extends ResthopperParameter {

	public name: string = "Transform";
	public nickName: string = "T";
	public description: string = "Transformation"
	public isOptional: boolean = false;
	public typeName: string = "Transform"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TransformOutput_geometry_g extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public description: string = "Transformed geometry"
	public isOptional: boolean = false;
	public typeName: string = "Geometry"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
