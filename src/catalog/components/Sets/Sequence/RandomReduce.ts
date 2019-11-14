import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class RandomReduce extends ResthopperComponent {

	public guid: string = "455925fd-23ff-4e57-a0e7-913a4165e659";
	public name: string = "RandomReduce";
	public nickName: string = "Reduce";
	public category: string = "Sets";
	public subCategory: string = "Sequence";
	public description: string = "Randomly remove N items from a list";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"list_l": RandomReduceInput_list_l,
		"reduction_r": RandomReduceInput_reduction_r,
		"seed_s": RandomReduceInput_seed_s,
	}

	public output:
	{
		"list_l": RandomReduceOutput_list_l,
	}

	constructor() {
		super();
		this.input = {
			"list_l": new RandomReduceInput_list_l(),
			"reduction_r": new RandomReduceInput_reduction_r(),
			"seed_s": new RandomReduceInput_seed_s(),
		}
		this.output = {
			"list_l": new RandomReduceOutput_list_l(),
		}
	}

}

class RandomReduceInput_list_l extends ResthopperParameter {

	public name: string = "List";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RandomReduceInput_reduction_r extends ResthopperParameter {

	public name: string = "Reduction";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RandomReduceInput_seed_s extends ResthopperParameter {

	public name: string = "Seed";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RandomReduceOutput_list_l extends ResthopperParameter {

	public name: string = "List";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
