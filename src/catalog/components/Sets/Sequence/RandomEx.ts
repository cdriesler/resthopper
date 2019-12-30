import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class RandomEx extends ResthopperComponent {

	public guid: string = "a12dddbf-bb49-4ef4-aeb8-5653bc882cbd";
	public name: string = "RandomEx";
	public nickName: string = "RndEx";
	public category: string = "Sets";
	public subCategory: string = "Sequence";
	public description: string = "Generate random data between extremes.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"min_l0": RandomExInput_min_l0,
		"max_l1": RandomExInput_max_l1,
		"count_n": RandomExInput_count_n,
		"seed_s": RandomExInput_seed_s,
	}

	public output:
	{
		"values_v": RandomExOutput_values_v,
	}

	constructor() {
		super();
		this.input = {
			"min_l0": new RandomExInput_min_l0(),
			"max_l1": new RandomExInput_max_l1(),
			"count_n": new RandomExInput_count_n(),
			"seed_s": new RandomExInput_seed_s(),
		}
		this.output = {
			"values_v": new RandomExOutput_values_v(),
		}
	}

}

class RandomExInput_min_l0 extends ResthopperParameter {

	public name: string = "Min";
	public nickName: string = "L0";
	public description: string = "Lower limit"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RandomExInput_max_l1 extends ResthopperParameter {

	public name: string = "Max";
	public nickName: string = "L1";
	public description: string = "Upper limit"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RandomExInput_count_n extends ResthopperParameter {

	public name: string = "Count";
	public nickName: string = "N";
	public description: string = "Number of values to generate"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RandomExInput_seed_s extends ResthopperParameter {

	public name: string = "Seed";
	public nickName: string = "S";
	public description: string = "Random Seed"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RandomExOutput_values_v extends ResthopperParameter {

	public name: string = "Values";
	public nickName: string = "V";
	public description: string = "Random values"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
