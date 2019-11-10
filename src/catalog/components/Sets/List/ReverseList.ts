import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ReverseList extends ResthopperComponent {

	public guid: string = "6ec97ea8-c559-47a2-8d0f-ce80c794d1f4";
	public name: string = "ReverseList";
	public category: string = "Sets";
	public subCategory: string = "List";
	public description: string = "Reverse the order of a list.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"List_L": ReverseListInput_List_L,
	}

	public output:
	{
		"List_L": ReverseListOutput_List_L,
	}

	constructor() {
		super();
		this.input = {
			"List_L": new ReverseListInput_List_L(),
		}
		this.output = {
			"List_L": new ReverseListOutput_List_L(),
		}
	}

}

class ReverseListInput_List_L extends ResthopperParameter {

	public name: string = "List";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ReverseListOutput_List_L extends ResthopperParameter {

	public name: string = "List";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
