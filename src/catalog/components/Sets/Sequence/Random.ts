import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Random extends ResthopperComponent {

	public guid: string = "2ab17f9a-d852-4405-80e1-938c5e57e78d";
	public name: string = "Random";
	public category: string = "Sets";
	public subCategory: string = "Sequence";
	public description: string = "Generate a list of pseudo random numbers.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Range_R": RandomInput_Range_R,
		"Number_N": RandomInput_Number_N,
		"Seed_S": RandomInput_Seed_S,
	}

	public output:
	{
		"Random_R": RandomOutput_Random_R,
	}

	constructor() {
		super();
		this.input = {
			"Range_R": new RandomInput_Range_R(),
			"Number_N": new RandomInput_Number_N(),
			"Seed_S": new RandomInput_Seed_S(),
		}
		this.output = {
			"Random_R": new RandomOutput_Random_R(),
		}
	}

}

class RandomInput_Range_R extends ResthopperParameter {

	public name: string = "Range";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Domain;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RandomInput_Number_N extends ResthopperParameter {

	public name: string = "Number";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RandomInput_Seed_S extends ResthopperParameter {

	public name: string = "Seed";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RandomOutput_Random_R extends ResthopperParameter {

	public name: string = "Random";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
