import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ReplaceMembers extends ResthopperComponent {

	public guid: string = "bafac914-ede4-4a59-a7b2-cc41bc3de961";
	public name: string = "ReplaceMembers";
	public category: string = "Sets";
	public subCategory: string = "Sets";
	public description: string = "Replace members in a set.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Set_S": ReplaceMembersInput_Set_S,
		"Find_F": ReplaceMembersInput_Find_F,
		"Replace_R": ReplaceMembersInput_Replace_R,
	}

	public output:
	{
		"Result_R": ReplaceMembersOutput_Result_R,
	}

	constructor() {
		super();
		this.input = {
			"Set_S": new ReplaceMembersInput_Set_S(),
			"Find_F": new ReplaceMembersInput_Find_F(),
			"Replace_R": new ReplaceMembersInput_Replace_R(),
		}
		this.output = {
			"Result_R": new ReplaceMembersOutput_Result_R(),
		}
	}

}

class ReplaceMembersInput_Set_S extends ResthopperParameter {

	public name: string = "Set";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ReplaceMembersInput_Find_F extends ResthopperParameter {

	public name: string = "Find";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ReplaceMembersInput_Replace_R extends ResthopperParameter {

	public name: string = "Replace";
	public nickName: string = "R";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ReplaceMembersOutput_Result_R extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
