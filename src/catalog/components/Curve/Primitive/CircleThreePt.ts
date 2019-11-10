import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CircleThreePt extends ResthopperComponent {

	public guid: string = "47886835-e3ff-4516-a3ed-1b419f055464";
	public name: string = "Circle3Pt";
	public category: string = "Curve";
	public subCategory: string = "Primitive";
	public description: string = "Create a circle defined by three points.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"PointA_A": CircleThreePtInput_PointA_A,
		"PointB_B": CircleThreePtInput_PointB_B,
		"PointC_C": CircleThreePtInput_PointC_C,
	}

	public output:
	{
		"Circle_C": CircleThreePtOutput_Circle_C,
		"Plane_P": CircleThreePtOutput_Plane_P,
		"Radius_R": CircleThreePtOutput_Radius_R,
	}

	constructor() {
		super();
		this.input = {
			"PointA_A": new CircleThreePtInput_PointA_A(),
			"PointB_B": new CircleThreePtInput_PointB_B(),
			"PointC_C": new CircleThreePtInput_PointC_C(),
		}
		this.output = {
			"Circle_C": new CircleThreePtOutput_Circle_C(),
			"Plane_P": new CircleThreePtOutput_Plane_P(),
			"Radius_R": new CircleThreePtOutput_Radius_R(),
		}
	}

}

class CircleThreePtInput_PointA_A extends ResthopperParameter {

	public name: string = "PointA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CircleThreePtInput_PointB_B extends ResthopperParameter {

	public name: string = "PointB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CircleThreePtInput_PointC_C extends ResthopperParameter {

	public name: string = "PointC";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CircleThreePtOutput_Circle_C extends ResthopperParameter {

	public name: string = "Circle";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Circle;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CircleThreePtOutput_Plane_P extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CircleThreePtOutput_Radius_R extends ResthopperParameter {

	public name: string = "Radius";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
