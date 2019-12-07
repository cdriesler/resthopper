import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Random extends ResthopperComponent {

	public guid: string = "2ab17f9a-d852-4405-80e1-938c5e57e78d";
	public name: string = "Random";
	public nickName: string = "Random";
	public category: string = "Sets";
	public subCategory: string = "Sequence";
	public description: string = "Generate a list of pseudo random numbers.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"range_r": RandomInput_range_r,
		"number_n": RandomInput_number_n,
		"seed_s": RandomInput_seed_s,
	}

	public output:
	{
		"random_r": RandomOutput_random_r,
	}

	constructor() {
		super();
		this.input = {
			"range_r": new RandomInput_range_r(),
			"number_n": new RandomInput_number_n(),
			"seed_s": new RandomInput_seed_s(),
		}
		this.output = {
			"random_r": new RandomOutput_random_r(),
		}
	}

}

class RandomInput_range_r extends ResthopperParameter {

	public name: string = "Range";
	public nickName: string = "R";
	public description: string = "Empty Domain parameter"
	public isOptional: boolean = false;
	public typeName: string = "Domain"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RandomInput_number_n extends ResthopperParameter {

	public name: string = "Number";
	public nickName: string = "N";
	public description: string = "Empty Integer parameter"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RandomInput_seed_s extends ResthopperParameter {

	public name: string = "Seed";
	public nickName: string = "S";
	public description: string = "Empty Integer parameter"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RandomOutput_random_r extends ResthopperParameter {

	public name: string = "Random";
	public nickName: string = "R";
	public description: string = "Empty Generic Data parameter"
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
