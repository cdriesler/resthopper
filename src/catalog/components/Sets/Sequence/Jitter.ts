import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Jitter extends ResthopperComponent {

	public guid: string = "f02a20f6-bb49-4e3d-b155-8ed5d3c6b000";
	public name: string = "Jitter";
	public nickName: string = "Jitter";
	public category: string = "Sets";
	public subCategory: string = "Sequence";
	public description: string = "Randomly shuffles a list of values.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

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
	public description: string = "Values to shuffle"
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class JitterInput_jitter_j extends ResthopperParameter {

	public name: string = "Jitter";
	public nickName: string = "J";
	public description: string = "Shuffling strength. (0.0 = no shuffling, 1.0 = complete shuffling)"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class JitterInput_seed_s extends ResthopperParameter {

	public name: string = "Seed";
	public nickName: string = "S";
	public description: string = "Seed of shuffling engine"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class JitterOutput_values_v extends ResthopperParameter {

	public name: string = "Values";
	public nickName: string = "V";
	public description: string = "Shuffled values"
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class JitterOutput_indices_i extends ResthopperParameter {

	public name: string = "Indices";
	public nickName: string = "I";
	public description: string = "Index map of shuffled items"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
