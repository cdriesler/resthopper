import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class RectangleTwoPt extends ResthopperComponent {

	public guid: string = "575660b1-8c79-4b8d-9222-7ab4a6ddb359";
	public name: string = "Rectangle2Pt";
	public category: string = "Curve";
	public subCategory: string = "Primitive";
	public description: string = "Create a rectangle from a base plane and two points";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Plane_P": RectangleTwoPtInput_Plane_P,
		"PointA_A": RectangleTwoPtInput_PointA_A,
		"PointB_B": RectangleTwoPtInput_PointB_B,
		"Radius_R": RectangleTwoPtInput_Radius_R,
	}

	public output:
	{
		"Rectangle_R": RectangleTwoPtOutput_Rectangle_R,
		"Length_L": RectangleTwoPtOutput_Length_L,
	}

	constructor() {
		super();
		this.input = {
			"Plane_P": new RectangleTwoPtInput_Plane_P(),
			"PointA_A": new RectangleTwoPtInput_PointA_A(),
			"PointB_B": new RectangleTwoPtInput_PointB_B(),
			"Radius_R": new RectangleTwoPtInput_Radius_R(),
		}
		this.output = {
			"Rectangle_R": new RectangleTwoPtOutput_Rectangle_R(),
			"Length_L": new RectangleTwoPtOutput_Length_L(),
		}
	}

}

class RectangleTwoPtInput_Plane_P extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RectangleTwoPtInput_PointA_A extends ResthopperParameter {

	public name: string = "PointA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RectangleTwoPtInput_PointB_B extends ResthopperParameter {

	public name: string = "PointB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RectangleTwoPtInput_Radius_R extends ResthopperParameter {

	public name: string = "Radius";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RectangleTwoPtOutput_Rectangle_R extends ResthopperParameter {

	public name: string = "Rectangle";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RectangleTwoPtOutput_Length_L extends ResthopperParameter {

	public name: string = "Length";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
