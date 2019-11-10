import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class KeyValueSearch extends ResthopperComponent {

	public guid: string = "1edcc3cf-cf84-41d4-8204-561162cfe510";
	public name: string = "KeyValueSearch";
	public category: string = "Sets";
	public subCategory: string = "Sets";
	public description: string = "Extract an item from a collection using a key-value match";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Keys_K": KeyValueSearchInput_Keys_K,
		"Values_V": KeyValueSearchInput_Values_V,
		"Search_S": KeyValueSearchInput_Search_S,
	}

	public output:
	{
		"Result_R": KeyValueSearchOutput_Result_R,
	}

	constructor() {
		super();
		this.input = {
			"Keys_K": new KeyValueSearchInput_Keys_K(),
			"Values_V": new KeyValueSearchInput_Values_V(),
			"Search_S": new KeyValueSearchInput_Search_S(),
		}
		this.output = {
			"Result_R": new KeyValueSearchOutput_Result_R(),
		}
	}

}

class KeyValueSearchInput_Keys_K extends ResthopperParameter {

	public name: string = "Keys";
	public nickName: string = "K";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class KeyValueSearchInput_Values_V extends ResthopperParameter {

	public name: string = "Values";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class KeyValueSearchInput_Search_S extends ResthopperParameter {

	public name: string = "Search";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class KeyValueSearchOutput_Result_R extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
