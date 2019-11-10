import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Jitter extends ResthopperComponent {

	public guid: string = "f02a20f6-bb49-4e3d-b155-8ed5d3c6b000";
	public name: string = "Jitter";
	public category: string = "Sets";
	public subCategory: string = "Sequence";
	public description: string = "Randomly shuffles a list of values.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"list_l": JitterInput_list_l,
		"jitter_j": JitterInput_jitter_j,
		"seed_s": JitterInput_seed_s,
	}

	public output:
	{
		"values_v": JitterOutput_values_v,
		"indices_i": JitterOutput_indices_i,
	}

	constructor() {
		super();
		this.input = {
			"list_l": new JitterInput_list_l(),
			"jitter_j": new JitterInput_jitter_j(),
			"seed_s": new JitterInput_seed_s(),
		}
		this.output = {
			"values_v": new JitterOutput_values_v(),
			"indices_i": new JitterOutput_indices_i(),
		}
	}

}

class JitterInput_list_l extends ResthopperParameter {

	public name: string = "List";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class JitterInput_jitter_j extends ResthopperParameter {

	public name: string = "Jitter";
	public nickName: string = "J";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class JitterInput_seed_s extends ResthopperParameter {

	public name: string = "Seed";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class JitterOutput_values_v extends ResthopperParameter {

	public name: string = "Values";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class JitterOutput_indices_i extends ResthopperParameter {

	public name: string = "Indices";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
