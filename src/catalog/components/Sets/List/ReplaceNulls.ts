import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ReplaceNulls extends ResthopperComponent {

	public guid: string = "f3230ecb-3631-4d6f-86f2-ef4b2ed37f45";
	public name: string = "ReplaceNulls";
	public category: string = "Sets";
	public subCategory: string = "List";
	public description: string = "Replace nulls or invalid data with other data";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Items_I": ReplaceNullsInput_Items_I,
		"Replacements_R": ReplaceNullsInput_Replacements_R,
	}

	public output:
	{
		"Items_I": ReplaceNullsOutput_Items_I,
		"Count_N": ReplaceNullsOutput_Count_N,
	}

	constructor() {
		super();
		this.input = {
			"Items_I": new ReplaceNullsInput_Items_I(),
			"Replacements_R": new ReplaceNullsInput_Replacements_R(),
		}
		this.output = {
			"Items_I": new ReplaceNullsOutput_Items_I(),
			"Count_N": new ReplaceNullsOutput_Count_N(),
		}
	}

}

class ReplaceNullsInput_Items_I extends ResthopperParameter {

	public name: string = "Items";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ReplaceNullsInput_Replacements_R extends ResthopperParameter {

	public name: string = "Replacements";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ReplaceNullsOutput_Items_I extends ResthopperParameter {

	public name: string = "Items";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ReplaceNullsOutput_Count_N extends ResthopperParameter {

	public name: string = "Count";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
