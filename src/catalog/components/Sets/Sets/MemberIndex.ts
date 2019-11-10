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
		"Set_S": MemberIndexInput_Set_S,
		"Member_M": MemberIndexInput_Member_M,
	}

	public output:
	{
		"Index_I": MemberIndexOutput_Index_I,
		"Count_N": MemberIndexOutput_Count_N,
	}

	constructor() {
		super();
		this.input = {
			"Set_S": new MemberIndexInput_Set_S(),
			"Member_M": new MemberIndexInput_Member_M(),
		}
		this.output = {
			"Index_I": new MemberIndexOutput_Index_I(),
			"Count_N": new MemberIndexOutput_Count_N(),
		}
	}

}

class MemberIndexInput_Set_S extends ResthopperParameter {

	public name: string = "Set";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MemberIndexInput_Member_M extends ResthopperParameter {

	public name: string = "Member";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MemberIndexOutput_Index_I extends ResthopperParameter {

	public name: string = "Index";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MemberIndexOutput_Count_N extends ResthopperParameter {

	public name: string = "Count";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
