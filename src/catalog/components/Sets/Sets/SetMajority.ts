import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SetMajority extends ResthopperComponent {

	public guid: string = "d4136a7b-7422-4660-9404-640474bd2725";
	public name: string = "SetMajority";
	public category: string = "Sets";
	public subCategory: string = "Sets";
	public description: string = "Determine majority member presence amongst three sets.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"SetA_A": SetMajorityInput_SetA_A,
		"SetB_B": SetMajorityInput_SetB_B,
		"SetC_C": SetMajorityInput_SetC_C,
	}

	public output:
	{
		"Result_R": SetMajorityOutput_Result_R,
	}

	constructor() {
		super();
		this.input = {
			"SetA_A": new SetMajorityInput_SetA_A(),
			"SetB_B": new SetMajorityInput_SetB_B(),
			"SetC_C": new SetMajorityInput_SetC_C(),
		}
		this.output = {
			"Result_R": new SetMajorityOutput_Result_R(),
		}
	}

}

class SetMajorityInput_SetA_A extends ResthopperParameter {

	public name: string = "SetA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SetMajorityInput_SetB_B extends ResthopperParameter {

	public name: string = "SetB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SetMajorityInput_SetC_C extends ResthopperParameter {

	public name: string = "SetC";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SetMajorityOutput_Result_R extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
