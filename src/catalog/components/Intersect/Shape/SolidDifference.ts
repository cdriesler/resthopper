import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SolidDifference extends ResthopperComponent {

	public guid: string = "fab11c30-2d9c-4d15-ab3c-2289f1ae5c21";
	public name: string = "SolidDifference";
	public category: string = "Intersect";
	public subCategory: string = "Shape";
	public description: string = "Perform a solid difference on two Brep sets.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"brepsa_a": SolidDifferenceInput_brepsa_a,
		"brepsb_b": SolidDifferenceInput_brepsb_b,
	}

	public output:
	{
		"result_r": SolidDifferenceOutput_result_r,
	}

	constructor() {
		super();
		this.input = {
			"brepsa_a": new SolidDifferenceInput_brepsa_a(),
			"brepsb_b": new SolidDifferenceInput_brepsb_b(),
		}
		this.output = {
			"result_r": new SolidDifferenceOutput_result_r(),
		}
	}

}

class SolidDifferenceInput_brepsa_a extends ResthopperParameter {

	public name: string = "BrepsA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Brep;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SolidDifferenceInput_brepsb_b extends ResthopperParameter {

	public name: string = "BrepsB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Brep;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SolidDifferenceOutput_result_r extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Brep;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
