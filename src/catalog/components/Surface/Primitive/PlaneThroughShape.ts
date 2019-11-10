import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PlaneThroughShape extends ResthopperComponent {

	public guid: string = "d8698126-0e91-4ae7-ba05-2490258573ea";
	public name: string = "PlaneThroughShape";
	public category: string = "Surface";
	public subCategory: string = "Primitive";
	public description: string = "Make a rectangular surface that is larger than a given shape.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"plane_p": PlaneThroughShapeInput_plane_p,
		"shape_s": PlaneThroughShapeInput_shape_s,
		"inflate_i": PlaneThroughShapeInput_inflate_i,
	}

	public output:
	{
		"surface_s": PlaneThroughShapeOutput_surface_s,
	}

	constructor() {
		super();
		this.input = {
			"plane_p": new PlaneThroughShapeInput_plane_p(),
			"shape_s": new PlaneThroughShapeInput_shape_s(),
			"inflate_i": new PlaneThroughShapeInput_inflate_i(),
		}
		this.output = {
			"surface_s": new PlaneThroughShapeOutput_surface_s(),
		}
	}

}

class PlaneThroughShapeInput_plane_p extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PlaneThroughShapeInput_shape_s extends ResthopperParameter {

	public name: string = "Shape";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Geometry"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PlaneThroughShapeInput_inflate_i extends ResthopperParameter {

	public name: string = "Inflate";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PlaneThroughShapeOutput_surface_s extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Surface"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
