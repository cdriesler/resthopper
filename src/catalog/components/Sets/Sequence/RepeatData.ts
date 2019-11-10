import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class RepeatData extends ResthopperComponent {

	public guid: string = "c40dc145-9e36-4a69-ac1a-6d825c654993";
	public name: string = "RepeatData";
	public category: string = "Sets";
	public subCategory: string = "Sequence";
	public description: string = "Repeat a pattern until it reaches a certain length.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Data_D": RepeatDataInput_Data_D,
		"Length_L": RepeatDataInput_Length_L,
	}

	public output:
	{
		"Data_D": RepeatDataOutput_Data_D,
	}

	constructor() {
		super();
		this.input = {
			"Data_D": new RepeatDataInput_Data_D(),
			"Length_L": new RepeatDataInput_Length_L(),
		}
		this.output = {
			"Data_D": new RepeatDataOutput_Data_D(),
		}
	}

}

class RepeatDataInput_Data_D extends ResthopperParameter {

	public name: string = "Data";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RepeatDataInput_Length_L extends ResthopperParameter {

	public name: string = "Length";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RepeatDataOutput_Data_D extends ResthopperParameter {

	public name: string = "Data";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
