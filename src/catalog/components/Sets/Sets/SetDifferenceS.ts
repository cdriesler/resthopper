import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SetDifferenceS extends ResthopperComponent {

	public guid: string = "d2461702-3164-4894-8c10-ed1fc4b52965";
	public name: string = "SetDifferenceS";
	public category: string = "Sets";
	public subCategory: string = "Sets";
	public description: string = "Create the symmetric difference of two sets (the collection of objects present in A or B but not both).";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"SetA_A": SetDifferenceSInput_SetA_A,
		"SetB_B": SetDifferenceSInput_SetB_B,
	}

	public output:
	{
		"ExDifference_X": SetDifferenceSOutput_ExDifference_X,
	}

	constructor() {
		super();
		this.input = {
			"SetA_A": new SetDifferenceSInput_SetA_A(),
			"SetB_B": new SetDifferenceSInput_SetB_B(),
		}
		this.output = {
			"ExDifference_X": new SetDifferenceSOutput_ExDifference_X(),
		}
	}

}

class SetDifferenceSInput_SetA_A extends ResthopperParameter {

	public name: string = "SetA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SetDifferenceSInput_SetB_B extends ResthopperParameter {

	public name: string = "SetB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SetDifferenceSOutput_ExDifference_X extends ResthopperParameter {

	public name: string = "ExDifference";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
