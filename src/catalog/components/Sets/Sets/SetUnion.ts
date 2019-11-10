import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SetUnion extends ResthopperComponent {

	public guid: string = "8eed5d78-7810-4ba1-968e-8a1f1db98e39";
	public name: string = "SetUnion";
	public category: string = "Sets";
	public subCategory: string = "Sets";
	public description: string = "Creates the union of two sets (the collection of unique objects present in either set).";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"SetA_A": SetUnionInput_SetA_A,
		"SetB_B": SetUnionInput_SetB_B,
	}

	public output:
	{
		"Union_U": SetUnionOutput_Union_U,
	}

	constructor() {
		super();
		this.input = {
			"SetA_A": new SetUnionInput_SetA_A(),
			"SetB_B": new SetUnionInput_SetB_B(),
		}
		this.output = {
			"Union_U": new SetUnionOutput_Union_U(),
		}
	}

}

class SetUnionInput_SetA_A extends ResthopperParameter {

	public name: string = "SetA";
	public nickName: string = "A";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SetUnionInput_SetB_B extends ResthopperParameter {

	public name: string = "SetB";
	public nickName: string = "B";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SetUnionOutput_Union_U extends ResthopperParameter {

	public name: string = "Union";
	public nickName: string = "U";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
