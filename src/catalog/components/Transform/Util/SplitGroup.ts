import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SplitGroup extends ResthopperComponent {

	public guid: string = "fd03419e-e1cc-4603-8a57-6dfa56ed5dec";
	public name: string = "SplitGroup";
	public category: string = "Transform";
	public subCategory: string = "Util";
	public description: string = "Split a group";
	public isObsolete: boolean = false;

	public library: string = "Grasshopper";

	public input:
	{
		"group_g": SplitGroupInput_group_g,
		"indices_i": SplitGroupInput_indices_i,
		"wrap_w": SplitGroupInput_wrap_w,
	}

	public output:
	{
		"groupa_a": SplitGroupOutput_groupa_a,
		"groupb_b": SplitGroupOutput_groupb_b,
	}

	constructor() {
		super();
		this.input = {
			"group_g": new SplitGroupInput_group_g(),
			"indices_i": new SplitGroupInput_indices_i(),
			"wrap_w": new SplitGroupInput_wrap_w(),
		}
		this.output = {
			"groupa_a": new SplitGroupOutput_groupa_a(),
			"groupb_b": new SplitGroupOutput_groupb_b(),
		}
	}

}

class SplitGroupInput_group_g extends ResthopperParameter {

	public name: string = "Group";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Group;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SplitGroupInput_indices_i extends ResthopperParameter {

	public name: string = "Indices";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SplitGroupInput_wrap_w extends ResthopperParameter {

	public name: string = "Wrap";
	public nickName: string = "W";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SplitGroupOutput_groupa_a extends ResthopperParameter {

	public name: string = "GroupA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Group;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SplitGroupOutput_groupb_b extends ResthopperParameter {

	public name: string = "GroupB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Group;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
