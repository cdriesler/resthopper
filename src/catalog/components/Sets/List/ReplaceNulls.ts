import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ReplaceNulls extends ResthopperComponent {

	public guid: string = "f3230ecb-3631-4d6f-86f2-ef4b2ed37f45";
	public name: string = "Replace Nulls";
	public nickName: string = "NullRep";
	public category: string = "Sets";
	public subCategory: string = "List";
	public description: string = "Replace nulls or invalid data with other data";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"items_i": ReplaceNullsInput_items_i,
		"replacements_r": ReplaceNullsInput_replacements_r,
	}

	public output:
	{
		"items_i": ReplaceNullsOutput_items_i,
		"count_n": ReplaceNullsOutput_count_n,
	}

	constructor() {
		super();
		this.input = {
			"items_i": new ReplaceNullsInput_items_i(),
			"replacements_r": new ReplaceNullsInput_replacements_r(),
		}
		this.output = {
			"items_i": new ReplaceNullsOutput_items_i(),
			"count_n": new ReplaceNullsOutput_count_n(),
		}
	}

}

class ReplaceNullsInput_items_i extends ResthopperParameter {

	public name: string = "Items";
	public nickName: string = "I";
	public description: string = "Items to test for null"
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ReplaceNullsInput_replacements_r extends ResthopperParameter {

	public name: string = "Replacements";
	public nickName: string = "R";
	public description: string = "Items to replace nulls with"
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ReplaceNullsOutput_items_i extends ResthopperParameter {

	public name: string = "Items";
	public nickName: string = "I";
	public description: string = "List without any nulls"
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ReplaceNullsOutput_count_n extends ResthopperParameter {

	public name: string = "Count";
	public nickName: string = "N";
	public description: string = "Number of items replaced"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
