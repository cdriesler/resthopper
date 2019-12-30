import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ShiftList extends ResthopperComponent {

	public guid: string = "4fdfe351-6c07-47ce-9fb9-be027fb62186";
	public name: string = "Shift List";
	public nickName: string = "Shift";
	public category: string = "Sets";
	public subCategory: string = "List";
	public description: string = "Offset all items in a list.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"list_l": ShiftListInput_list_l,
		"shift_s": ShiftListInput_shift_s,
		"wrap_w": ShiftListInput_wrap_w,
	}

	public output:
	{
		"list_l": ShiftListOutput_list_l,
	}

	constructor() {
		super();
		this.input = {
			"list_l": new ShiftListInput_list_l(),
			"shift_s": new ShiftListInput_shift_s(),
			"wrap_w": new ShiftListInput_wrap_w(),
		}
		this.output = {
			"list_l": new ShiftListOutput_list_l(),
		}
	}

}

class ShiftListInput_list_l extends ResthopperParameter {

	public name: string = "List";
	public nickName: string = "L";
	public description: string = "List to shift"
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ShiftListInput_shift_s extends ResthopperParameter {

	public name: string = "Shift";
	public nickName: string = "S";
	public description: string = "Shift offset"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ShiftListInput_wrap_w extends ResthopperParameter {

	public name: string = "Wrap";
	public nickName: string = "W";
	public description: string = "Wrap values"
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ShiftListOutput_list_l extends ResthopperParameter {

	public name: string = "List";
	public nickName: string = "L";
	public description: string = "Shifted list"
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
