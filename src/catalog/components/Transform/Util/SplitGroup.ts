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
		"Group_G": SplitGroupInput_Group_G,
		"Indices_I": SplitGroupInput_Indices_I,
		"Wrap_W": SplitGroupInput_Wrap_W,
	}

	public output:
	{
		"GroupA_A": SplitGroupOutput_GroupA_A,
		"GroupB_B": SplitGroupOutput_GroupB_B,
	}

	constructor() {
		super();
		this.input = {
			"Group_G": new SplitGroupInput_Group_G(),
			"Indices_I": new SplitGroupInput_Indices_I(),
			"Wrap_W": new SplitGroupInput_Wrap_W(),
		}
		this.output = {
			"GroupA_A": new SplitGroupOutput_GroupA_A(),
			"GroupB_B": new SplitGroupOutput_GroupB_B(),
		}
	}

}

class SplitGroupInput_Group_G extends ResthopperParameter {

	public name: string = "Group";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Group;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SplitGroupInput_Indices_I extends ResthopperParameter {

	public name: string = "Indices";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SplitGroupInput_Wrap_W extends ResthopperParameter {

	public name: string = "Wrap";
	public nickName: string = "W";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SplitGroupOutput_GroupA_A extends ResthopperParameter {

	public name: string = "GroupA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Group;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SplitGroupOutput_GroupB_B extends ResthopperParameter {

	public name: string = "GroupB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Group;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
