import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ReverseList extends ResthopperComponent {

	public guid: string = "6ec97ea8-c559-47a2-8d0f-ce80c794d1f4";
	public name: string = "ReverseList";
	public nickName: string = "Rev";
	public category: string = "Sets";
	public subCategory: string = "List";
	public description: string = "Reverse the order of a list.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"list_l": ReverseListInput_list_l,
	}

	public output:
	{
		"list_l": ReverseListOutput_list_l,
	}

	constructor() {
		super();
		this.input = {
			"list_l": new ReverseListInput_list_l(),
		}
		this.output = {
			"list_l": new ReverseListOutput_list_l(),
		}
	}

}

class ReverseListInput_list_l extends ResthopperParameter {

	public name: string = "List";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ReverseListOutput_list_l extends ResthopperParameter {

	public name: string = "List";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
