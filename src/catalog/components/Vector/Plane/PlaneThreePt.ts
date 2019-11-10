import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PlaneThreePt extends ResthopperComponent {

	public guid: string = "c98a6015-7a2f-423c-bc66-bdc505249b45";
	public name: string = "Plane3Pt";
	public category: string = "Vector";
	public subCategory: string = "Plane";
	public description: string = "Create a plane through three points.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"PointA_A": PlaneThreePtInput_PointA_A,
		"PointB_B": PlaneThreePtInput_PointB_B,
		"PointC_C": PlaneThreePtInput_PointC_C,
	}

	public output:
	{
		"Plane_Pl": PlaneThreePtOutput_Plane_Pl,
	}

	constructor() {
		super();
		this.input = {
			"PointA_A": new PlaneThreePtInput_PointA_A(),
			"PointB_B": new PlaneThreePtInput_PointB_B(),
			"PointC_C": new PlaneThreePtInput_PointC_C(),
		}
		this.output = {
			"Plane_Pl": new PlaneThreePtOutput_Plane_Pl(),
		}
	}

}

class PlaneThreePtInput_PointA_A extends ResthopperParameter {

	public name: string = "PointA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PlaneThreePtInput_PointB_B extends ResthopperParameter {

	public name: string = "PointB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PlaneThreePtInput_PointC_C extends ResthopperParameter {

	public name: string = "PointC";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PlaneThreePtOutput_Plane_Pl extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "Pl";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
