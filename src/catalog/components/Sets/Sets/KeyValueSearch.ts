import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class KeyValueSearch extends ResthopperComponent {

	public guid: string = "1edcc3cf-cf84-41d4-8204-561162cfe510";
	public name: string = "KeyValueSearch";
	public nickName: string = "KeySearch";
	public category: string = "Sets";
	public subCategory: string = "Sets";
	public description: string = "Extract an item from a collection using a key-value match";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"keys_k": KeyValueSearchInput_keys_k,
		"values_v": KeyValueSearchInput_values_v,
		"search_s": KeyValueSearchInput_search_s,
	}

	public output:
	{
		"result_r": KeyValueSearchOutput_result_r,
	}

	constructor() {
		super();
		this.input = {
			"keys_k": new KeyValueSearchInput_keys_k(),
			"values_v": new KeyValueSearchInput_values_v(),
			"search_s": new KeyValueSearchInput_search_s(),
		}
		this.output = {
			"result_r": new KeyValueSearchOutput_result_r(),
		}
	}

}

class KeyValueSearchInput_keys_k extends ResthopperParameter {

	public name: string = "Keys";
	public nickName: string = "K";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class KeyValueSearchInput_values_v extends ResthopperParameter {

	public name: string = "Values";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class KeyValueSearchInput_search_s extends ResthopperParameter {

	public name: string = "Search";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class KeyValueSearchOutput_result_r extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
