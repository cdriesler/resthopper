import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ListItem extends ResthopperComponent {

	public guid: string = "59daf374-bc21-4a5e-8282-5504fb7ae9ae";
	public name: string = "ListItem";
	public nickName: string = "Item";
	public category: string = "Sets";
	public subCategory: string = "List";
	public description: string = "Retrieve a specific item from a list.";
	public isObsolete: boolean = false;
	public isVariable: boolean = true;

	public library: string = "Math Components";

	public input:
	{
		"list_l": ListItemInput_list_l,
		"index_i": ListItemInput_index_i,
		"wrap_w": ListItemInput_wrap_w,
	}

	public output:
	{
		"item_i": ListItemOutput_item_i,
	}

	constructor() {
		super();
		this.input = {
			"list_l": new ListItemInput_list_l(),
			"index_i": new ListItemInput_index_i(),
			"wrap_w": new ListItemInput_wrap_w(),
		}
		this.output = {
			"item_i": new ListItemOutput_item_i(),
		}
	}

}

class ListItemInput_list_l extends ResthopperParameter {

	public name: string = "List";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ListItemInput_index_i extends ResthopperParameter {

	public name: string = "Index";
	public nickName: string = "i";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ListItemInput_wrap_w extends ResthopperParameter {

	public name: string = "Wrap";
	public nickName: string = "W";
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ListItemOutput_item_i extends ResthopperParameter {

	public name: string = "Item";
	public nickName: string = "i";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
