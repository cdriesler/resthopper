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

	public library: string = "Surface Components";

	public input:
	{
		"Plane_P": PlaneThroughShapeInput_Plane_P,
		"Shape_S": PlaneThroughShapeInput_Shape_S,
		"Inflate_I": PlaneThroughShapeInput_Inflate_I,
	}

	public output:
	{
		"Surface_S": PlaneThroughShapeOutput_Surface_S,
	}

	constructor() {
		super();
		this.input = {
			"Plane_P": new PlaneThroughShapeInput_Plane_P(),
			"Shape_S": new PlaneThroughShapeInput_Shape_S(),
			"Inflate_I": new PlaneThroughShapeInput_Inflate_I(),
		}
		this.output = {
			"Surface_S": new PlaneThroughShapeOutput_Surface_S(),
		}
	}

}

class PlaneThroughShapeInput_Plane_P extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PlaneThroughShapeInput_Shape_S extends ResthopperParameter {

	public name: string = "Shape";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PlaneThroughShapeInput_Inflate_I extends ResthopperParameter {

	public name: string = "Inflate";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PlaneThroughShapeOutput_Surface_S extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Surface;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
