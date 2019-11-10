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
		"list_l": CreateSetInput_list_l,
	}

	public output:
	{
		"set_s": CreateSetOutput_set_s,
		"map_m": CreateSetOutput_map_m,
	}

	constructor() {
		super();
		this.input = {
			"list_l": new CreateSetInput_list_l(),
		}
		this.output = {
			"set_s": new CreateSetOutput_set_s(),
			"map_m": new CreateSetOutput_map_m(),
		}
	}

}

class CreateSetInput_list_l extends ResthopperParameter {

	public name: string = "List";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CreateSetOutput_set_s extends ResthopperParameter {

	public name: string = "Set";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CreateSetOutput_map_m extends ResthopperParameter {

	public name: string = "Map";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
