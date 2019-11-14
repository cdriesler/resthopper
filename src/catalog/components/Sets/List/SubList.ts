import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SubList extends ResthopperComponent {

	public guid: string = "b333ff42-93bd-406b-8e17-15780719b6ec";
	public name: string = "SubList";
	public nickName: string = "SubSet";
	public category: string = "Sets";
	public subCategory: string = "List";
	public description: string = "Extract a subset from a list.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"list_l": SubListInput_list_l,
		"domain_d": SubListInput_domain_d,
		"wrap_w": SubListInput_wrap_w,
	}

	public output:
	{
		"list_l": SubListOutput_list_l,
		"index_i": SubListOutput_index_i,
	}

	constructor() {
		super();
		this.input = {
			"list_l": new SubListInput_list_l(),
			"domain_d": new SubListInput_domain_d(),
			"wrap_w": new SubListInput_wrap_w(),
		}
		this.output = {
			"list_l": new SubListOutput_list_l(),
			"index_i": new SubListOutput_index_i(),
		}
	}

}

class SubListInput_list_l extends ResthopperParameter {

	public name: string = "List";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SubListInput_domain_d extends ResthopperParameter {

	public name: string = "Domain";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Domain"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SubListInput_wrap_w extends ResthopperParameter {

	public name: string = "Wrap";
	public nickName: string = "W";
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SubListOutput_list_l extends ResthopperParameter {

	public name: string = "List";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SubListOutput_index_i extends ResthopperParameter {

	public name: string = "Index";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
