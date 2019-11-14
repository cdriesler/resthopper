import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ListLength extends ResthopperComponent {

	public guid: string = "1817fd29-20ae-4503-b542-f0fb651e67d7";
	public name: string = "ListLength";
	public nickName: string = "Lng";
	public category: string = "Sets";
	public subCategory: string = "List";
	public description: string = "Measure the length of a list.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"list_l": ListLengthInput_list_l,
	}

	public output:
	{
		"length_l": ListLengthOutput_length_l,
	}

	constructor() {
		super();
		this.input = {
			"list_l": new ListLengthInput_list_l(),
		}
		this.output = {
			"length_l": new ListLengthOutput_length_l(),
		}
	}

}

class ListLengthInput_list_l extends ResthopperParameter {

	public name: string = "List";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ListLengthOutput_length_l extends ResthopperParameter {

	public name: string = "Length";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
