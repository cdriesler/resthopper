import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class LongestList extends ResthopperComponent {

	public guid: string = "8440fd1b-b6e0-4bdb-aa93-4ec295c213e9";
	public name: string = "LongestList";
	public category: string = "Sets";
	public subCategory: string = "List";
	public description: string = "Grow a collection of lists to the longest length amongst them";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"ListA_A": LongestListInput_ListA_A,
		"ListB_B": LongestListInput_ListB_B,
	}

	public output:
	{
		"ListA_A": LongestListOutput_ListA_A,
		"ListB_B": LongestListOutput_ListB_B,
	}

	constructor() {
		super();
		this.input = {
			"ListA_A": new LongestListInput_ListA_A(),
			"ListB_B": new LongestListInput_ListB_B(),
		}
		this.output = {
			"ListA_A": new LongestListOutput_ListA_A(),
			"ListB_B": new LongestListOutput_ListB_B(),
		}
	}

}

class LongestListInput_ListA_A extends ResthopperParameter {

	public name: string = "ListA";
	public nickName: string = "A";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LongestListInput_ListB_B extends ResthopperParameter {

	public name: string = "ListB";
	public nickName: string = "B";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LongestListOutput_ListA_A extends ResthopperParameter {

	public name: string = "ListA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LongestListOutput_ListB_B extends ResthopperParameter {

	public name: string = "ListB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
