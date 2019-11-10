import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ArcThreePt extends ResthopperComponent {

	public guid: string = "9fa1b081-b1c7-4a12-a163-0aa8da9ff6c4";
	public name: string = "Arc3Pt";
	public category: string = "Curve";
	public subCategory: string = "Primitive";
	public description: string = "Create an arc through three points.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"PointA_A": ArcThreePtInput_PointA_A,
		"PointB_B": ArcThreePtInput_PointB_B,
		"PointC_C": ArcThreePtInput_PointC_C,
	}

	public output:
	{
		"Arc_A": ArcThreePtOutput_Arc_A,
		"Plane_P": ArcThreePtOutput_Plane_P,
		"Radius_R": ArcThreePtOutput_Radius_R,
	}

	constructor() {
		super();
		this.input = {
			"PointA_A": new ArcThreePtInput_PointA_A(),
			"PointB_B": new ArcThreePtInput_PointB_B(),
			"PointC_C": new ArcThreePtInput_PointC_C(),
		}
		this.output = {
			"Arc_A": new ArcThreePtOutput_Arc_A(),
			"Plane_P": new ArcThreePtOutput_Plane_P(),
			"Radius_R": new ArcThreePtOutput_Radius_R(),
		}
	}

}

class ArcThreePtInput_PointA_A extends ResthopperParameter {

	public name: string = "PointA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ArcThreePtInput_PointB_B extends ResthopperParameter {

	public name: string = "PointB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ArcThreePtInput_PointC_C extends ResthopperParameter {

	public name: string = "PointC";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ArcThreePtOutput_Arc_A extends ResthopperParameter {

	public name: string = "Arc";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ArcThreePtOutput_Plane_P extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ArcThreePtOutput_Radius_R extends ResthopperParameter {

	public name: string = "Radius";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
