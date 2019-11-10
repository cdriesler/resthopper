import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Truncate extends ResthopperComponent {

	public guid: string = "bd96f893-d57b-4f04-90d0-dca0d72ff2f9";
	public name: string = "Truncate";
	public category: string = "Maths";
	public subCategory: string = "Util";
	public description: string = "Perform truncation of numerical extremes";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Input_I": TruncateInput_Input_I,
		"Truncationfactor_t": TruncateInput_Truncationfactor_t,
	}

	public output:
	{
		"Result_T": TruncateOutput_Result_T,
	}

	constructor() {
		super();
		this.input = {
			"Input_I": new TruncateInput_Input_I(),
			"Truncationfactor_t": new TruncateInput_Truncationfactor_t(),
		}
		this.output = {
			"Result_T": new TruncateOutput_Result_T(),
		}
	}

}

class TruncateInput_Input_I extends ResthopperParameter {

	public name: string = "Input";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TruncateInput_Truncationfactor_t extends ResthopperParameter {

	public name: string = "Truncationfactor";
	public nickName: string = "t";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TruncateOutput_Result_T extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
