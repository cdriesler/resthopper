import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MemberIndex extends ResthopperComponent {

	public guid: string = "3ff27857-b988-417a-b495-b24c733dbd00";
	public name: string = "MemberIndex";
	public category: string = "Sets";
	public subCategory: string = "Sets";
	public description: string = "Find the occurences of a specific member in a set.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"set_s": MemberIndexInput_set_s,
		"member_m": MemberIndexInput_member_m,
	}

	public output:
	{
		"index_i": MemberIndexOutput_index_i,
		"count_n": MemberIndexOutput_count_n,
	}

	constructor() {
		super();
		this.input = {
			"set_s": new MemberIndexInput_set_s(),
			"member_m": new MemberIndexInput_member_m(),
		}
		this.output = {
			"index_i": new MemberIndexOutput_index_i(),
			"count_n": new MemberIndexOutput_count_n(),
		}
	}

}

class MemberIndexInput_set_s extends ResthopperParameter {

	public name: string = "Set";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MemberIndexInput_member_m extends ResthopperParameter {

	public name: string = "Member";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MemberIndexOutput_index_i extends ResthopperParameter {

	public name: string = "Index";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MemberIndexOutput_count_n extends ResthopperParameter {

	public name: string = "Count";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
