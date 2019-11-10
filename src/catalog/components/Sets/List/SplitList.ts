import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SplitList extends ResthopperComponent {

	public guid: string = "9ab93e1a-ebdf-4090-9296-b000cff7b202";
	public name: string = "SplitList";
	public category: string = "Sets";
	public subCategory: string = "List";
	public description: string = "Split a list into separate parts.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"List_L": SplitListInput_List_L,
		"Index_i": SplitListInput_Index_i,
	}

	public output:
	{
		"ListA_A": SplitListOutput_ListA_A,
		"ListB_B": SplitListOutput_ListB_B,
	}

	constructor() {
		super();
		this.input = {
			"List_L": new SplitListInput_List_L(),
			"Index_i": new SplitListInput_Index_i(),
		}
		this.output = {
			"ListA_A": new SplitListOutput_ListA_A(),
			"ListB_B": new SplitListOutput_ListB_B(),
		}
	}

}

class SplitListInput_List_L extends ResthopperParameter {

	public name: string = "List";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SplitListInput_Index_i extends ResthopperParameter {

	public name: string = "Index";
	public nickName: string = "i";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SplitListOutput_ListA_A extends ResthopperParameter {

	public name: string = "ListA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SplitListOutput_ListB_B extends ResthopperParameter {

	public name: string = "ListB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
