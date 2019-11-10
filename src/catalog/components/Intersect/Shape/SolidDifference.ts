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
		"BrepsA_A": SolidDifferenceInput_BrepsA_A,
		"BrepsB_B": SolidDifferenceInput_BrepsB_B,
	}

	public output:
	{
		"Result_R": SolidDifferenceOutput_Result_R,
	}

	constructor() {
		super();
		this.input = {
			"BrepsA_A": new SolidDifferenceInput_BrepsA_A(),
			"BrepsB_B": new SolidDifferenceInput_BrepsB_B(),
		}
		this.output = {
			"Result_R": new SolidDifferenceOutput_Result_R(),
		}
	}

}

class SolidDifferenceInput_BrepsA_A extends ResthopperParameter {

	public name: string = "BrepsA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Brep;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SolidDifferenceInput_BrepsB_B extends ResthopperParameter {

	public name: string = "BrepsB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Brep;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SolidDifferenceOutput_Result_R extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Brep;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
