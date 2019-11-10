import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ShortestList extends ResthopperComponent {

	public guid: string = "5a13ec19-e4e9-43da-bf65-f93025fa87ca";
	public name: string = "ShortestList";
	public category: string = "Sets";
	public subCategory: string = "List";
	public description: string = "Shrink a collection of lists to the shortest length amongst them";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"ListA_A": ShortestListInput_ListA_A,
		"ListB_B": ShortestListInput_ListB_B,
	}

	public output:
	{
		"ListA_A": ShortestListOutput_ListA_A,
		"ListB_B": ShortestListOutput_ListB_B,
	}

	constructor() {
		super();
		this.input = {
			"ListA_A": new ShortestListInput_ListA_A(),
			"ListB_B": new ShortestListInput_ListB_B(),
		}
		this.output = {
			"ListA_A": new ShortestListOutput_ListA_A(),
			"ListB_B": new ShortestListOutput_ListB_B(),
		}
	}

}

class ShortestListInput_ListA_A extends ResthopperParameter {

	public name: string = "ListA";
	public nickName: string = "A";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ShortestListInput_ListB_B extends ResthopperParameter {

	public name: string = "ListB";
	public nickName: string = "B";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ShortestListOutput_ListA_A extends ResthopperParameter {

	public name: string = "ListA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ShortestListOutput_ListB_B extends ResthopperParameter {

	public name: string = "ListB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
