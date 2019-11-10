import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SortList extends ResthopperComponent {

	public guid: string = "6f93d366-919f-4dda-a35e-ba03dd62799b";
	public name: string = "SortList";
	public category: string = "Sets";
	public subCategory: string = "List";
	public description: string = "Sort a list of numeric keys.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Keys_K": SortListInput_Keys_K,
		"ValuesA_A": SortListInput_ValuesA_A,
	}

	public output:
	{
		"Keys_K": SortListOutput_Keys_K,
		"ValuesA_A": SortListOutput_ValuesA_A,
	}

	constructor() {
		super();
		this.input = {
			"Keys_K": new SortListInput_Keys_K(),
			"ValuesA_A": new SortListInput_ValuesA_A(),
		}
		this.output = {
			"Keys_K": new SortListOutput_Keys_K(),
			"ValuesA_A": new SortListOutput_ValuesA_A(),
		}
	}

}

class SortListInput_Keys_K extends ResthopperParameter {

	public name: string = "Keys";
	public nickName: string = "K";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SortListInput_ValuesA_A extends ResthopperParameter {

	public name: string = "ValuesA";
	public nickName: string = "A";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SortListOutput_Keys_K extends ResthopperParameter {

	public name: string = "Keys";
	public nickName: string = "K";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SortListOutput_ValuesA_A extends ResthopperParameter {

	public name: string = "ValuesA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
