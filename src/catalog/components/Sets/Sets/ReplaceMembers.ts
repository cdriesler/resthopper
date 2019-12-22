import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ReplaceMembers extends ResthopperComponent {

	public guid: string = "bafac914-ede4-4a59-a7b2-cc41bc3de961";
	public name: string = "Replace Members";
	public nickName: string = "Replace";
	public category: string = "Sets";
	public subCategory: string = "Sets";
	public description: string = "Replace members in a set.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"set_s": ReplaceMembersInput_set_s,
		"find_f": ReplaceMembersInput_find_f,
		"replace_r": ReplaceMembersInput_replace_r,
	}

	public output:
	{
		"result_r": ReplaceMembersOutput_result_r,
	}

	constructor() {
		super();
		this.input = {
			"set_s": new ReplaceMembersInput_set_s(),
			"find_f": new ReplaceMembersInput_find_f(),
			"replace_r": new ReplaceMembersInput_replace_r(),
		}
		this.output = {
			"result_r": new ReplaceMembersOutput_result_r(),
		}
	}

}

class ReplaceMembersInput_set_s extends ResthopperParameter {

	public name: string = "Set";
	public nickName: string = "S";
	public description: string = "Empty Generic Data parameter"
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ReplaceMembersInput_find_f extends ResthopperParameter {

	public name: string = "Find";
	public nickName: string = "F";
	public description: string = "Empty Generic Data parameter"
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ReplaceMembersInput_replace_r extends ResthopperParameter {

	public name: string = "Replace";
	public nickName: string = "R";
	public description: string = "Empty Generic Data parameter"
	public isOptional: boolean = true;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ReplaceMembersOutput_result_r extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public description: string = "Empty Generic Data parameter"
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
