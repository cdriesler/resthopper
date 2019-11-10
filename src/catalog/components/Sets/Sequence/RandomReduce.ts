import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class RandomReduce extends ResthopperComponent {

	public guid: string = "455925fd-23ff-4e57-a0e7-913a4165e659";
	public name: string = "RandomReduce";
	public category: string = "Sets";
	public subCategory: string = "Sequence";
	public description: string = "Randomly remove N items from a list";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"List_L": RandomReduceInput_List_L,
		"Reduction_R": RandomReduceInput_Reduction_R,
		"Seed_S": RandomReduceInput_Seed_S,
	}

	public output:
	{
		"List_L": RandomReduceOutput_List_L,
	}

	constructor() {
		super();
		this.input = {
			"List_L": new RandomReduceInput_List_L(),
			"Reduction_R": new RandomReduceInput_Reduction_R(),
			"Seed_S": new RandomReduceInput_Seed_S(),
		}
		this.output = {
			"List_L": new RandomReduceOutput_List_L(),
		}
	}

}

class RandomReduceInput_List_L extends ResthopperParameter {

	public name: string = "List";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RandomReduceInput_Reduction_R extends ResthopperParameter {

	public name: string = "Reduction";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RandomReduceInput_Seed_S extends ResthopperParameter {

	public name: string = "Seed";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RandomReduceOutput_List_L extends ResthopperParameter {

	public name: string = "List";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
