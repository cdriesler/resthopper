import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ShiftList extends ResthopperComponent {

	public guid: string = "4fdfe351-6c07-47ce-9fb9-be027fb62186";
	public name: string = "ShiftList";
	public category: string = "Sets";
	public subCategory: string = "List";
	public description: string = "Offset all items in a list.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"List_L": ShiftListInput_List_L,
		"Shift_S": ShiftListInput_Shift_S,
		"Wrap_W": ShiftListInput_Wrap_W,
	}

	public output:
	{
		"List_L": ShiftListOutput_List_L,
	}

	constructor() {
		super();
		this.input = {
			"List_L": new ShiftListInput_List_L(),
			"Shift_S": new ShiftListInput_Shift_S(),
			"Wrap_W": new ShiftListInput_Wrap_W(),
		}
		this.output = {
			"List_L": new ShiftListOutput_List_L(),
		}
	}

}

class ShiftListInput_List_L extends ResthopperParameter {

	public name: string = "List";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ShiftListInput_Shift_S extends ResthopperParameter {

	public name: string = "Shift";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ShiftListInput_Wrap_W extends ResthopperParameter {

	public name: string = "Wrap";
	public nickName: string = "W";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ShiftListOutput_List_L extends ResthopperParameter {

	public name: string = "List";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
