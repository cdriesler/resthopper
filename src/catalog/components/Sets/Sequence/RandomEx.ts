import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class RandomEx extends ResthopperComponent {

	public guid: string = "a12dddbf-bb49-4ef4-aeb8-5653bc882cbd";
	public name: string = "RandomEx";
	public category: string = "Sets";
	public subCategory: string = "Sequence";
	public description: string = "Generate random data between extremes.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"Min_L0": RandomExInput_Min_L0,
		"Max_L1": RandomExInput_Max_L1,
		"Count_N": RandomExInput_Count_N,
		"Seed_S": RandomExInput_Seed_S,
	}

	public output:
	{
		"Values_V": RandomExOutput_Values_V,
	}

	constructor() {
		super();
		this.input = {
			"Min_L0": new RandomExInput_Min_L0(),
			"Max_L1": new RandomExInput_Max_L1(),
			"Count_N": new RandomExInput_Count_N(),
			"Seed_S": new RandomExInput_Seed_S(),
		}
		this.output = {
			"Values_V": new RandomExOutput_Values_V(),
		}
	}

}

class RandomExInput_Min_L0 extends ResthopperParameter {

	public name: string = "Min";
	public nickName: string = "L0";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RandomExInput_Max_L1 extends ResthopperParameter {

	public name: string = "Max";
	public nickName: string = "L1";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RandomExInput_Count_N extends ResthopperParameter {

	public name: string = "Count";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RandomExInput_Seed_S extends ResthopperParameter {

	public name: string = "Seed";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RandomExOutput_Values_V extends ResthopperParameter {

	public name: string = "Values";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
