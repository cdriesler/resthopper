import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ReplaceItems extends ResthopperComponent {

	public guid: string = "7a218bfb-b93d-4c1f-83d3-5a0b909dd60b";
	public name: string = "ReplaceItems";
	public category: string = "Sets";
	public subCategory: string = "List";
	public description: string = "Replace certain items in a list.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"List_L": ReplaceItemsInput_List_L,
		"Item_I": ReplaceItemsInput_Item_I,
		"Indices_i": ReplaceItemsInput_Indices_i,
		"Wrap_W": ReplaceItemsInput_Wrap_W,
	}

	public output:
	{
		"List_L": ReplaceItemsOutput_List_L,
	}

	constructor() {
		super();
		this.input = {
			"List_L": new ReplaceItemsInput_List_L(),
			"Item_I": new ReplaceItemsInput_Item_I(),
			"Indices_i": new ReplaceItemsInput_Indices_i(),
			"Wrap_W": new ReplaceItemsInput_Wrap_W(),
		}
		this.output = {
			"List_L": new ReplaceItemsOutput_List_L(),
		}
	}

}

class ReplaceItemsInput_List_L extends ResthopperParameter {

	public name: string = "List";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ReplaceItemsInput_Item_I extends ResthopperParameter {

	public name: string = "Item";
	public nickName: string = "I";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ReplaceItemsInput_Indices_i extends ResthopperParameter {

	public name: string = "Indices";
	public nickName: string = "i";
	public isOptional: boolean = true;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ReplaceItemsInput_Wrap_W extends ResthopperParameter {

	public name: string = "Wrap";
	public nickName: string = "W";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ReplaceItemsOutput_List_L extends ResthopperParameter {

	public name: string = "List";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
