import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ReplaceItems extends ResthopperComponent {

	public guid: string = "7a218bfb-b93d-4c1f-83d3-5a0b909dd60b";
	public name: string = "Replace Items";
	public nickName: string = "Replace";
	public category: string = "Sets";
	public subCategory: string = "List";
	public description: string = "Replace certain items in a list.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"list_l": ReplaceItemsInput_list_l,
		"item_i": ReplaceItemsInput_item_i,
		"indices_i": ReplaceItemsInput_indices_i,
		"wrap_w": ReplaceItemsInput_wrap_w,
	}

	public output:
	{
		"list_l": ReplaceItemsOutput_list_l,
	}

	constructor() {
		super();
		this.input = {
			"list_l": new ReplaceItemsInput_list_l(),
			"item_i": new ReplaceItemsInput_item_i(),
			"indices_i": new ReplaceItemsInput_indices_i(),
			"wrap_w": new ReplaceItemsInput_wrap_w(),
		}
		this.output = {
			"list_l": new ReplaceItemsOutput_list_l(),
		}
	}

}

class ReplaceItemsInput_list_l extends ResthopperParameter {

	public name: string = "List";
	public nickName: string = "L";
	public description: string = "Empty Generic Data parameter"
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ReplaceItemsInput_item_i extends ResthopperParameter {

	public name: string = "Item";
	public nickName: string = "I";
	public description: string = "Empty Generic Data parameter"
	public isOptional: boolean = true;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ReplaceItemsInput_indices_i extends ResthopperParameter {

	public name: string = "Indices";
	public nickName: string = "i";
	public description: string = "Empty Integer parameter"
	public isOptional: boolean = true;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ReplaceItemsInput_wrap_w extends ResthopperParameter {

	public name: string = "Wrap";
	public nickName: string = "W";
	public description: string = "Empty Boolean parameter"
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ReplaceItemsOutput_list_l extends ResthopperParameter {

	public name: string = "List";
	public nickName: string = "L";
	public description: string = "Empty Generic Data parameter"
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
