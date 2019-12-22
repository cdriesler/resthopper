import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SolidIntersection extends ResthopperComponent {

	public guid: string = "5723c845-cafc-442d-a667-8c76532845e6";
	public name: string = "Solid Intersection";
	public nickName: string = "SInt";
	public category: string = "Intersect";
	public subCategory: string = "Shape";
	public description: string = "Perform a solid intersection on two Brep sets.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"brepsa_a": SolidIntersectionInput_brepsa_a,
		"brepsb_b": SolidIntersectionInput_brepsb_b,
	}

	public output:
	{
		"result_r": SolidIntersectionOutput_result_r,
	}

	constructor() {
		super();
		this.input = {
			"brepsa_a": new SolidIntersectionInput_brepsa_a(),
			"brepsb_b": new SolidIntersectionInput_brepsb_b(),
		}
		this.output = {
			"result_r": new SolidIntersectionOutput_result_r(),
		}
	}

}

class SolidIntersectionInput_brepsa_a extends ResthopperParameter {

	public name: string = "BrepsA";
	public nickName: string = "A";
	public description: string = "Empty Brep parameter"
	public isOptional: boolean = false;
	public typeName: string = "Brep"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SolidIntersectionInput_brepsb_b extends ResthopperParameter {

	public name: string = "BrepsB";
	public nickName: string = "B";
	public description: string = "Empty Brep parameter"
	public isOptional: boolean = false;
	public typeName: string = "Brep"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SolidIntersectionOutput_result_r extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public description: string = "Empty Brep parameter"
	public isOptional: boolean = false;
	public typeName: string = "Brep"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
