import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SetDifference extends ResthopperComponent {

	public guid: string = "e3b1a10c-4d49-4140-b8e6-0b5732a26c31";
	public name: string = "SetDifference";
	public category: string = "Sets";
	public subCategory: string = "Sets";
	public description: string = "Create the difference of two sets (the collection of objects present in A but not in B).";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"SetA_A": SetDifferenceInput_SetA_A,
		"SetB_B": SetDifferenceInput_SetB_B,
	}

	public output:
	{
		"Union_U": SetDifferenceOutput_Union_U,
	}

	constructor() {
		super();
		this.input = {
			"SetA_A": new SetDifferenceInput_SetA_A(),
			"SetB_B": new SetDifferenceInput_SetB_B(),
		}
		this.output = {
			"Union_U": new SetDifferenceOutput_Union_U(),
		}
	}

}

class SetDifferenceInput_SetA_A extends ResthopperParameter {

	public name: string = "SetA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SetDifferenceInput_SetB_B extends ResthopperParameter {

	public name: string = "SetB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SetDifferenceOutput_Union_U extends ResthopperParameter {

	public name: string = "Union";
	public nickName: string = "U";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
