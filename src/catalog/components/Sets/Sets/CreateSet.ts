import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CreateSet extends ResthopperComponent {

	public guid: string = "98c3c63a-e78a-43ea-a111-514fcf312c95";
	public name: string = "CreateSet";
	public category: string = "Sets";
	public subCategory: string = "Sets";
	public description: string = "Creates the valid set from a list of items (a valid set only contains distinct elements).";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"List_L": CreateSetInput_List_L,
	}

	public output:
	{
		"Set_S": CreateSetOutput_Set_S,
		"Map_M": CreateSetOutput_Map_M,
	}

	constructor() {
		super();
		this.input = {
			"List_L": new CreateSetInput_List_L(),
		}
		this.output = {
			"Set_S": new CreateSetOutput_Set_S(),
			"Map_M": new CreateSetOutput_Map_M(),
		}
	}

}

class CreateSetInput_List_L extends ResthopperParameter {

	public name: string = "List";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CreateSetOutput_Set_S extends ResthopperParameter {

	public name: string = "Set";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CreateSetOutput_Map_M extends ResthopperParameter {

	public name: string = "Map";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
