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
		"List_L": InsertItemsInput_List_L,
		"Item_I": InsertItemsInput_Item_I,
		"Indices_i": InsertItemsInput_Indices_i,
		"Wrap_W": InsertItemsInput_Wrap_W,
	}

	public output:
	{
		"List_L": InsertItemsOutput_List_L,
	}

	constructor() {
		super();
		this.input = {
			"List_L": new InsertItemsInput_List_L(),
			"Item_I": new InsertItemsInput_Item_I(),
			"Indices_i": new InsertItemsInput_Indices_i(),
			"Wrap_W": new InsertItemsInput_Wrap_W(),
		}
		this.output = {
			"List_L": new InsertItemsOutput_List_L(),
		}
	}

}

class InsertItemsInput_List_L extends ResthopperParameter {

	public name: string = "List";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class InsertItemsInput_Item_I extends ResthopperParameter {

	public name: string = "Item";
	public nickName: string = "I";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class InsertItemsInput_Indices_i extends ResthopperParameter {

	public name: string = "Indices";
	public nickName: string = "i";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class InsertItemsInput_Wrap_W extends ResthopperParameter {

	public name: string = "Wrap";
	public nickName: string = "W";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class InsertItemsOutput_List_L extends ResthopperParameter {

	public name: string = "List";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
