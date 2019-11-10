import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SolidIntersection extends ResthopperComponent {

	public guid: string = "5723c845-cafc-442d-a667-8c76532845e6";
	public name: string = "SolidIntersection";
	public category: string = "Intersect";
	public subCategory: string = "Shape";
	public description: string = "Perform a solid intersection on two Brep sets.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"BrepsA_A": SolidIntersectionInput_BrepsA_A,
		"BrepsB_B": SolidIntersectionInput_BrepsB_B,
	}

	public output:
	{
		"Result_R": SolidIntersectionOutput_Result_R,
	}

	constructor() {
		super();
		this.input = {
			"BrepsA_A": new SolidIntersectionInput_BrepsA_A(),
			"BrepsB_B": new SolidIntersectionInput_BrepsB_B(),
		}
		this.output = {
			"Result_R": new SolidIntersectionOutput_Result_R(),
		}
	}

}

class SolidIntersectionInput_BrepsA_A extends ResthopperParameter {

	public name: string = "BrepsA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Brep;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SolidIntersectionInput_BrepsB_B extends ResthopperParameter {

	public name: string = "BrepsB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Brep;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SolidIntersectionOutput_Result_R extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Brep;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
