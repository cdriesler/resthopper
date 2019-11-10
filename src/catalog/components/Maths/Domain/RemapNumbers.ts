import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class RemapNumbers extends ResthopperComponent {

	public guid: string = "2fcc2743-8339-4cdf-a046-a1f17439191d";
	public name: string = "RemapNumbers";
	public category: string = "Maths";
	public subCategory: string = "Domain";
	public description: string = "Remap numbers into a new numeric domain";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"value_v": RemapNumbersInput_value_v,
		"source_s": RemapNumbersInput_source_s,
		"target_t": RemapNumbersInput_target_t,
	}

	public output:
	{
		"mapped_r": RemapNumbersOutput_mapped_r,
		"clipped_c": RemapNumbersOutput_clipped_c,
	}

	constructor() {
		super();
		this.input = {
			"value_v": new RemapNumbersInput_value_v(),
			"source_s": new RemapNumbersInput_source_s(),
			"target_t": new RemapNumbersInput_target_t(),
		}
		this.output = {
			"mapped_r": new RemapNumbersOutput_mapped_r(),
			"clipped_c": new RemapNumbersOutput_clipped_c(),
		}
	}

}

class RemapNumbersInput_value_v extends ResthopperParameter {

	public name: string = "Value";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RemapNumbersInput_source_s extends ResthopperParameter {

	public name: string = "Source";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Domain"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RemapNumbersInput_target_t extends ResthopperParameter {

	public name: string = "Target";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Domain"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RemapNumbersOutput_mapped_r extends ResthopperParameter {

	public name: string = "Mapped";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RemapNumbersOutput_clipped_c extends ResthopperParameter {

	public name: string = "Clipped";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
