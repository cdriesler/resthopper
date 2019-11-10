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
		"Data_D": ReplacePathsInput_Data_D,
		"Search_S": ReplacePathsInput_Search_S,
		"Replace_R": ReplacePathsInput_Replace_R,
	}

	public output:
	{
		"Data_D": ReplacePathsOutput_Data_D,
	}

	constructor() {
		super();
		this.input = {
			"Data_D": new ReplacePathsInput_Data_D(),
			"Search_S": new ReplacePathsInput_Search_S(),
			"Replace_R": new ReplacePathsInput_Replace_R(),
		}
		this.output = {
			"Data_D": new ReplacePathsOutput_Data_D(),
		}
	}

}

class ReplacePathsInput_Data_D extends ResthopperParameter {

	public name: string = "Data";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ReplacePathsInput_Search_S extends ResthopperParameter {

	public name: string = "Search";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Text;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ReplacePathsInput_Replace_R extends ResthopperParameter {

	public name: string = "Replace";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Path;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ReplacePathsOutput_Data_D extends ResthopperParameter {

	public name: string = "Data";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
