import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Truncate extends ResthopperComponent {

	public guid: string = "bd96f893-d57b-4f04-90d0-dca0d72ff2f9";
	public name: string = "Truncate";
	public nickName: string = "Trunc";
	public category: string = "Maths";
	public subCategory: string = "Util";
	public description: string = "Perform truncation of numerical extremes";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"input_i": TruncateInput_input_i,
		"truncationfactor_t": TruncateInput_truncationfactor_t,
	}

	public output:
	{
		"result_t": TruncateOutput_result_t,
	}

	constructor() {
		super();
		this.input = {
			"input_i": new TruncateInput_input_i(),
			"truncationfactor_t": new TruncateInput_truncationfactor_t(),
		}
		this.output = {
			"result_t": new TruncateOutput_result_t(),
		}
	}

}

class TruncateInput_input_i extends ResthopperParameter {

	public name: string = "Input";
	public nickName: string = "I";
	public description: string = "Empty Generic Data parameter"
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TruncateInput_truncationfactor_t extends ResthopperParameter {

	public name: string = "Truncationfactor";
	public nickName: string = "t";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TruncateOutput_result_t extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "T";
	public description: string = "Empty Generic Data parameter"
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
