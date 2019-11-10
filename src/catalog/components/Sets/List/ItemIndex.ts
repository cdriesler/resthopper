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
		"List_L": ItemIndexInput_List_L,
		"Item_i": ItemIndexInput_Item_i,
	}

	public output:
	{
		"Index_i": ItemIndexOutput_Index_i,
	}

	constructor() {
		super();
		this.input = {
			"List_L": new ItemIndexInput_List_L(),
			"Item_i": new ItemIndexInput_Item_i(),
		}
		this.output = {
			"Index_i": new ItemIndexOutput_Index_i(),
		}
	}

}

class ItemIndexInput_List_L extends ResthopperParameter {

	public name: string = "List";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ItemIndexInput_Item_i extends ResthopperParameter {

	public name: string = "Item";
	public nickName: string = "i";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ItemIndexOutput_Index_i extends ResthopperParameter {

	public name: string = "Index";
	public nickName: string = "i";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
