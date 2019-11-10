import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SetIntersection extends ResthopperComponent {

	public guid: string = "82f19c48-9e73-43a4-ae6c-3a8368099b08";
	public name: string = "SetIntersection";
	public category: string = "Sets";
	public subCategory: string = "Sets";
	public description: string = "Creates the intersection of two sets (the collection of unique objects present in both sets).";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"SetA_A": SetIntersectionInput_SetA_A,
		"SetB_B": SetIntersectionInput_SetB_B,
	}

	public output:
	{
		"Union_U": SetIntersectionOutput_Union_U,
	}

	constructor() {
		super();
		this.input = {
			"SetA_A": new SetIntersectionInput_SetA_A(),
			"SetB_B": new SetIntersectionInput_SetB_B(),
		}
		this.output = {
			"Union_U": new SetIntersectionOutput_Union_U(),
		}
	}

}

class SetIntersectionInput_SetA_A extends ResthopperParameter {

	public name: string = "SetA";
	public nickName: string = "A";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SetIntersectionInput_SetB_B extends ResthopperParameter {

	public name: string = "SetB";
	public nickName: string = "B";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SetIntersectionOutput_Union_U extends ResthopperParameter {

	public name: string = "Union";
	public nickName: string = "U";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
