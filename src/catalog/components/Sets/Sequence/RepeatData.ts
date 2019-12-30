import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class RepeatData extends ResthopperComponent {

	public guid: string = "c40dc145-9e36-4a69-ac1a-6d825c654993";
	public name: string = "Repeat Data";
	public nickName: string = "Repeat";
	public category: string = "Sets";
	public subCategory: string = "Sequence";
	public description: string = "Repeat a pattern until it reaches a certain length.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"data_d": RepeatDataInput_data_d,
		"length_l": RepeatDataInput_length_l,
	}

	public output:
	{
		"data_d": RepeatDataOutput_data_d,
	}

	constructor() {
		super();
		this.input = {
			"data_d": new RepeatDataInput_data_d(),
			"length_l": new RepeatDataInput_length_l(),
		}
		this.output = {
			"data_d": new RepeatDataOutput_data_d(),
		}
	}

}

class RepeatDataInput_data_d extends ResthopperParameter {

	public name: string = "Data";
	public nickName: string = "D";
	public description: string = "Pattern to repeat"
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RepeatDataInput_length_l extends ResthopperParameter {

	public name: string = "Length";
	public nickName: string = "L";
	public description: string = "Length of final pattern"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RepeatDataOutput_data_d extends ResthopperParameter {

	public name: string = "Data";
	public nickName: string = "D";
	public description: string = "Repeated data"
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
