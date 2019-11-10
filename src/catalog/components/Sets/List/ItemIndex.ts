import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ItemIndex extends ResthopperComponent {

	public guid: string = "a759fd55-e6be-4673-8365-c28d5b52c6c0";
	public name: string = "ItemIndex";
	public category: string = "Sets";
	public subCategory: string = "List";
	public description: string = "Retrieve the index of a certain item in a list.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"list_l": ItemIndexInput_list_l,
		"item_i": ItemIndexInput_item_i,
	}

	public output:
	{
		"index_i": ItemIndexOutput_index_i,
	}

	constructor() {
		super();
		this.input = {
			"list_l": new ItemIndexInput_list_l(),
			"item_i": new ItemIndexInput_item_i(),
		}
		this.output = {
			"index_i": new ItemIndexOutput_index_i(),
		}
	}

}

class ItemIndexInput_list_l extends ResthopperParameter {

	public name: string = "List";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ItemIndexInput_item_i extends ResthopperParameter {

	public name: string = "Item";
	public nickName: string = "i";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ItemIndexOutput_index_i extends ResthopperParameter {

	public name: string = "Index";
	public nickName: string = "i";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
