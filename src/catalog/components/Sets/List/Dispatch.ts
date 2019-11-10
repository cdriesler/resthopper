import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Dispatch extends ResthopperComponent {

	public guid: string = "d8332545-21b2-4716-96e3-8559a9876e17";
	public name: string = "Dispatch";
	public category: string = "Sets";
	public subCategory: string = "List";
	public description: string = "Dispatch the items in a list into two target lists.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"List_L": DispatchInput_List_L,
		"Dispatchpattern_P": DispatchInput_Dispatchpattern_P,
	}

	public output:
	{
		"ListA_A": DispatchOutput_ListA_A,
		"ListB_B": DispatchOutput_ListB_B,
	}

	constructor() {
		super();
		this.input = {
			"List_L": new DispatchInput_List_L(),
			"Dispatchpattern_P": new DispatchInput_Dispatchpattern_P(),
		}
		this.output = {
			"ListA_A": new DispatchOutput_ListA_A(),
			"ListB_B": new DispatchOutput_ListB_B(),
		}
	}

}

class DispatchInput_List_L extends ResthopperParameter {

	public name: string = "List";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DispatchInput_Dispatchpattern_P extends ResthopperParameter {

	public name: string = "Dispatchpattern";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DispatchOutput_ListA_A extends ResthopperParameter {

	public name: string = "ListA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DispatchOutput_ListB_B extends ResthopperParameter {

	public name: string = "ListB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
