import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class DeleteConsecutive extends ResthopperComponent {

	public guid: string = "190d042c-2270-4bc1-81c0-4f90c170c9c9";
	public name: string = "DeleteConsecutive";
	public category: string = "Sets";
	public subCategory: string = "Sets";
	public description: string = "Delete consecutive similar members in a set.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Set_S": DeleteConsecutiveInput_Set_S,
		"Wrap_W": DeleteConsecutiveInput_Wrap_W,
	}

	public output:
	{
		"Set_S": DeleteConsecutiveOutput_Set_S,
		"Count_N": DeleteConsecutiveOutput_Count_N,
	}

	constructor() {
		super();
		this.input = {
			"Set_S": new DeleteConsecutiveInput_Set_S(),
			"Wrap_W": new DeleteConsecutiveInput_Wrap_W(),
		}
		this.output = {
			"Set_S": new DeleteConsecutiveOutput_Set_S(),
			"Count_N": new DeleteConsecutiveOutput_Count_N(),
		}
	}

}

class DeleteConsecutiveInput_Set_S extends ResthopperParameter {

	public name: string = "Set";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeleteConsecutiveInput_Wrap_W extends ResthopperParameter {

	public name: string = "Wrap";
	public nickName: string = "W";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeleteConsecutiveOutput_Set_S extends ResthopperParameter {

	public name: string = "Set";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeleteConsecutiveOutput_Count_N extends ResthopperParameter {

	public name: string = "Count";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
