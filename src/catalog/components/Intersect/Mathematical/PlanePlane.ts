import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PlanePlane extends ResthopperComponent {

	public guid: string = "290cf9c4-0711-4704-851e-4c99e3343ac5";
	public name: string = "PlanePlane";
	public nickName: string = "PPX";
	public category: string = "Intersect";
	public subCategory: string = "Mathematical";
	public description: string = "Solve the intersection event of two planes.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"planea_a": PlanePlaneInput_planea_a,
		"planeb_b": PlanePlaneInput_planeb_b,
	}

	public output:
	{
		"line_l": PlanePlaneOutput_line_l,
	}

	constructor() {
		super();
		this.input = {
			"planea_a": new PlanePlaneInput_planea_a(),
			"planeb_b": new PlanePlaneInput_planeb_b(),
		}
		this.output = {
			"line_l": new PlanePlaneOutput_line_l(),
		}
	}

}

class PlanePlaneInput_planea_a extends ResthopperParameter {

	public name: string = "PlaneA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PlanePlaneInput_planeb_b extends ResthopperParameter {

	public name: string = "PlaneB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PlanePlaneOutput_line_l extends ResthopperParameter {

	public name: string = "Line";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Line"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
