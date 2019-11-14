import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PlanePlanePlane extends ResthopperComponent {

	public guid: string = "f1ea5a4b-1a4f-4cf4-ad94-1ecfb9302b6e";
	public name: string = "PlanePlanePlane";
	public nickName: string = "3PX";
	public category: string = "Intersect";
	public subCategory: string = "Mathematical";
	public description: string = "Solve the intersection events of three planes.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"planea_a": PlanePlanePlaneInput_planea_a,
		"planeb_b": PlanePlanePlaneInput_planeb_b,
		"planec_c": PlanePlanePlaneInput_planec_c,
	}

	public output:
	{
		"point_pt": PlanePlanePlaneOutput_point_pt,
		"lineab_ab": PlanePlanePlaneOutput_lineab_ab,
		"lineac_ac": PlanePlanePlaneOutput_lineac_ac,
		"linebc_bc": PlanePlanePlaneOutput_linebc_bc,
	}

	constructor() {
		super();
		this.input = {
			"planea_a": new PlanePlanePlaneInput_planea_a(),
			"planeb_b": new PlanePlanePlaneInput_planeb_b(),
			"planec_c": new PlanePlanePlaneInput_planec_c(),
		}
		this.output = {
			"point_pt": new PlanePlanePlaneOutput_point_pt(),
			"lineab_ab": new PlanePlanePlaneOutput_lineab_ab(),
			"lineac_ac": new PlanePlanePlaneOutput_lineac_ac(),
			"linebc_bc": new PlanePlanePlaneOutput_linebc_bc(),
		}
	}

}

class PlanePlanePlaneInput_planea_a extends ResthopperParameter {

	public name: string = "PlaneA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PlanePlanePlaneInput_planeb_b extends ResthopperParameter {

	public name: string = "PlaneB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PlanePlanePlaneInput_planec_c extends ResthopperParameter {

	public name: string = "PlaneC";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PlanePlanePlaneOutput_point_pt extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "Pt";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PlanePlanePlaneOutput_lineab_ab extends ResthopperParameter {

	public name: string = "LineAB";
	public nickName: string = "AB";
	public isOptional: boolean = false;
	public typeName: string = "Line"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PlanePlanePlaneOutput_lineac_ac extends ResthopperParameter {

	public name: string = "LineAC";
	public nickName: string = "AC";
	public isOptional: boolean = false;
	public typeName: string = "Line"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PlanePlanePlaneOutput_linebc_bc extends ResthopperParameter {

	public name: string = "LineBC";
	public nickName: string = "BC";
	public isOptional: boolean = false;
	public typeName: string = "Line"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
