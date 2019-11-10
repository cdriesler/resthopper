import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ReplacePaths extends ResthopperComponent {

	public guid: string = "bfaaf799-77dc-4f31-9ad8-2f7d1a80aeb0";
	public name: string = "ReplacePaths";
	public category: string = "Sets";
	public subCategory: string = "Tree";
	public description: string = "Find & replace paths in a data tree";
	public isObsolete: boolean = false;

	public library: string = "Grasshopper";

	public input:
	{
		"data_d": ReplacePathsInput_data_d,
		"search_s": ReplacePathsInput_search_s,
		"replace_r": ReplacePathsInput_replace_r,
	}

	public output:
	{
		"data_d": ReplacePathsOutput_data_d,
	}

	constructor() {
		super();
		this.input = {
			"data_d": new ReplacePathsInput_data_d(),
			"search_s": new ReplacePathsInput_search_s(),
			"replace_r": new ReplacePathsInput_replace_r(),
		}
		this.output = {
			"data_d": new ReplacePathsOutput_data_d(),
		}
	}

}

class ReplacePathsInput_data_d extends ResthopperParameter {

	public name: string = "Data";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ReplacePathsInput_search_s extends ResthopperParameter {

	public name: string = "Search";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Text"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ReplacePathsInput_replace_r extends ResthopperParameter {

	public name: string = "Replace";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Path"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ReplacePathsOutput_data_d extends ResthopperParameter {

	public name: string = "Data";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
