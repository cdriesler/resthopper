import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SubSet extends ResthopperComponent {

	public guid: string = "4cfc0bb0-0745-4772-a520-39f9bf3d99bc";
	public name: string = "SubSet";
	public category: string = "Sets";
	public subCategory: string = "Sets";
	public description: string = "Test two sets for inclusion.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"SetA_A": SubSetInput_SetA_A,
		"SetB_B": SubSetInput_SetB_B,
	}

	public output:
	{
		"Result_R": SubSetOutput_Result_R,
	}

	constructor() {
		super();
		this.input = {
			"SetA_A": new SubSetInput_SetA_A(),
			"SetB_B": new SubSetInput_SetB_B(),
		}
		this.output = {
			"Result_R": new SubSetOutput_Result_R(),
		}
	}

}

class SubSetInput_SetA_A extends ResthopperParameter {

	public name: string = "SetA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SubSetInput_SetB_B extends ResthopperParameter {

	public name: string = "SetB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SubSetOutput_Result_R extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
