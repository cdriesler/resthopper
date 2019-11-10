import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ListItem extends ResthopperComponent {

	public guid: string = "59daf374-bc21-4a5e-8282-5504fb7ae9ae";
	public name: string = "ListItem";
	public category: string = "Sets";
	public subCategory: string = "List";
	public description: string = "Retrieve a specific item from a list.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"List_L": ListItemInput_List_L,
		"Index_i": ListItemInput_Index_i,
		"Wrap_W": ListItemInput_Wrap_W,
	}

	public output:
	{
		"Item_i": ListItemOutput_Item_i,
	}

	constructor() {
		super();
		this.input = {
			"List_L": new ListItemInput_List_L(),
			"Index_i": new ListItemInput_Index_i(),
			"Wrap_W": new ListItemInput_Wrap_W(),
		}
		this.output = {
			"Item_i": new ListItemOutput_Item_i(),
		}
	}

}

class ListItemInput_List_L extends ResthopperParameter {

	public name: string = "List";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ListItemInput_Index_i extends ResthopperParameter {

	public name: string = "Index";
	public nickName: string = "i";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ListItemInput_Wrap_W extends ResthopperParameter {

	public name: string = "Wrap";
	public nickName: string = "W";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ListItemOutput_Item_i extends ResthopperParameter {

	public name: string = "Item";
	public nickName: string = "i";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
