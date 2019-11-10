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
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"seta_a": SetMajorityInput_seta_a,
		"setb_b": SetMajorityInput_setb_b,
		"setc_c": SetMajorityInput_setc_c,
	}

	public output:
	{
		"result_r": SetMajorityOutput_result_r,
	}

	constructor() {
		super();
		this.input = {
			"seta_a": new SetMajorityInput_seta_a(),
			"setb_b": new SetMajorityInput_setb_b(),
			"setc_c": new SetMajorityInput_setc_c(),
		}
		this.output = {
			"result_r": new SetMajorityOutput_result_r(),
		}
	}

}

class SetMajorityInput_seta_a extends ResthopperParameter {

	public name: string = "SetA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SetMajorityInput_setb_b extends ResthopperParameter {

	public name: string = "SetB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SetMajorityInput_setc_c extends ResthopperParameter {

	public name: string = "SetC";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SetMajorityOutput_result_r extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
