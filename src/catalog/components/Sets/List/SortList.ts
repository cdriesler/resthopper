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
		"keys_k": SortListInput_keys_k,
		"valuesa_a": SortListInput_valuesa_a,
	}

	public output:
	{
		"keys_k": SortListOutput_keys_k,
		"valuesa_a": SortListOutput_valuesa_a,
	}

	constructor() {
		super();
		this.input = {
			"keys_k": new SortListInput_keys_k(),
			"valuesa_a": new SortListInput_valuesa_a(),
		}
		this.output = {
			"keys_k": new SortListOutput_keys_k(),
			"valuesa_a": new SortListOutput_valuesa_a(),
		}
	}

}

class SortListInput_keys_k extends ResthopperParameter {

	public name: string = "Keys";
	public nickName: string = "K";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SortListInput_valuesa_a extends ResthopperParameter {

	public name: string = "ValuesA";
	public nickName: string = "A";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SortListOutput_keys_k extends ResthopperParameter {

	public name: string = "Keys";
	public nickName: string = "K";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SortListOutput_valuesa_a extends ResthopperParameter {

	public name: string = "ValuesA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
