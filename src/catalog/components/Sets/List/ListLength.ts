import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ListLength extends ResthopperComponent {

	public guid: string = "1817fd29-20ae-4503-b542-f0fb651e67d7";
	public name: string = "ListLength";
	public category: string = "Sets";
	public subCategory: string = "List";
	public description: string = "Measure the length of a list.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"List_L": ListLengthInput_List_L,
	}

	public output:
	{
		"Length_L": ListLengthOutput_Length_L,
	}

	constructor() {
		super();
		this.input = {
			"List_L": new ListLengthInput_List_L(),
		}
		this.output = {
			"Length_L": new ListLengthOutput_Length_L(),
		}
	}

}

class ListLengthInput_List_L extends ResthopperParameter {

	public name: string = "List";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ListLengthOutput_Length_L extends ResthopperParameter {

	public name: string = "Length";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
