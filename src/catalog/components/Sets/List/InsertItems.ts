import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class InsertItems extends ResthopperComponent {

	public guid: string = "e2039b07-d3f3-40f8-af88-d74fed238727";
	public name: string = "InsertItems";
	public category: string = "Sets";
	public subCategory: string = "List";
	public description: string = "Insert a collection of items into a list.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"list_l": InsertItemsInput_list_l,
		"item_i": InsertItemsInput_item_i,
		"indices_i": InsertItemsInput_indices_i,
		"wrap_w": InsertItemsInput_wrap_w,
	}

	public output:
	{
		"list_l": InsertItemsOutput_list_l,
	}

	constructor() {
		super();
		this.input = {
			"list_l": new InsertItemsInput_list_l(),
			"item_i": new InsertItemsInput_item_i(),
			"indices_i": new InsertItemsInput_indices_i(),
			"wrap_w": new InsertItemsInput_wrap_w(),
		}
		this.output = {
			"list_l": new InsertItemsOutput_list_l(),
		}
	}

}

class InsertItemsInput_list_l extends ResthopperParameter {

	public name: string = "List";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class InsertItemsInput_item_i extends ResthopperParameter {

	public name: string = "Item";
	public nickName: string = "I";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class InsertItemsInput_indices_i extends ResthopperParameter {

	public name: string = "Indices";
	public nickName: string = "i";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class InsertItemsInput_wrap_w extends ResthopperParameter {

	public name: string = "Wrap";
	public nickName: string = "W";
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class InsertItemsOutput_list_l extends ResthopperParameter {

	public name: string = "List";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
