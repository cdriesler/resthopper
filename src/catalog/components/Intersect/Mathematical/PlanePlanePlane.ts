import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PlanePlanePlane extends ResthopperComponent {

	public guid: string = "f1ea5a4b-1a4f-4cf4-ad94-1ecfb9302b6e";
	public name: string = "PlanePlanePlane";
	public category: string = "Intersect";
	public subCategory: string = "Mathematical";
	public description: string = "Solve the intersection events of three planes.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"PlaneA_A": PlanePlanePlaneInput_PlaneA_A,
		"PlaneB_B": PlanePlanePlaneInput_PlaneB_B,
		"PlaneC_C": PlanePlanePlaneInput_PlaneC_C,
	}

	public output:
	{
		"Point_Pt": PlanePlanePlaneOutput_Point_Pt,
		"LineAB_AB": PlanePlanePlaneOutput_LineAB_AB,
		"LineAC_AC": PlanePlanePlaneOutput_LineAC_AC,
		"LineBC_BC": PlanePlanePlaneOutput_LineBC_BC,
	}

	constructor() {
		super();
		this.input = {
			"PlaneA_A": new PlanePlanePlaneInput_PlaneA_A(),
			"PlaneB_B": new PlanePlanePlaneInput_PlaneB_B(),
			"PlaneC_C": new PlanePlanePlaneInput_PlaneC_C(),
		}
		this.output = {
			"Point_Pt": new PlanePlanePlaneOutput_Point_Pt(),
			"LineAB_AB": new PlanePlanePlaneOutput_LineAB_AB(),
			"LineAC_AC": new PlanePlanePlaneOutput_LineAC_AC(),
			"LineBC_BC": new PlanePlanePlaneOutput_LineBC_BC(),
		}
	}

}

class PlanePlanePlaneInput_PlaneA_A extends ResthopperParameter {

	public name: string = "PlaneA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PlanePlanePlaneInput_PlaneB_B extends ResthopperParameter {

	public name: string = "PlaneB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PlanePlanePlaneInput_PlaneC_C extends ResthopperParameter {

	public name: string = "PlaneC";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PlanePlanePlaneOutput_Point_Pt extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "Pt";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PlanePlanePlaneOutput_LineAB_AB extends ResthopperParameter {

	public name: string = "LineAB";
	public nickName: string = "AB";
	public isOptional: boolean = false;
	public typeName: string = "Line;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PlanePlanePlaneOutput_LineAC_AC extends ResthopperParameter {

	public name: string = "LineAC";
	public nickName: string = "AC";
	public isOptional: boolean = false;
	public typeName: string = "Line;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PlanePlanePlaneOutput_LineBC_BC extends ResthopperParameter {

	public name: string = "LineBC";
	public nickName: string = "BC";
	public isOptional: boolean = false;
	public typeName: string = "Line;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
