import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PlanePlane extends ResthopperComponent {

	public guid: string = "290cf9c4-0711-4704-851e-4c99e3343ac5";
	public name: string = "PlanePlane";
	public category: string = "Intersect";
	public subCategory: string = "Mathematical";
	public description: string = "Solve the intersection event of two planes.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"PlaneA_A": PlanePlaneInput_PlaneA_A,
		"PlaneB_B": PlanePlaneInput_PlaneB_B,
	}

	public output:
	{
		"Line_L": PlanePlaneOutput_Line_L,
	}

	constructor() {
		super();
		this.input = {
			"PlaneA_A": new PlanePlaneInput_PlaneA_A(),
			"PlaneB_B": new PlanePlaneInput_PlaneB_B(),
		}
		this.output = {
			"Line_L": new PlanePlaneOutput_Line_L(),
		}
	}

}

class PlanePlaneInput_PlaneA_A extends ResthopperParameter {

	public name: string = "PlaneA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PlanePlaneInput_PlaneB_B extends ResthopperParameter {

	public name: string = "PlaneB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PlanePlaneOutput_Line_L extends ResthopperParameter {

	public name: string = "Line";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Line;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
