import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class StackData extends ResthopperComponent {

	public guid: string = "5fa4e736-0d82-4af0-97fb-30a79f4cbf41";
	public name: string = "StackData";
	public nickName: string = "Stack";
	public category: string = "Sets";
	public subCategory: string = "Sequence";
	public description: string = "Duplicate individual items in a list of data";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"data_d": StackDataInput_data_d,
		"stack_s": StackDataInput_stack_s,
	}

	public output:
	{
		"data_d": StackDataOutput_data_d,
	}

	constructor() {
		super();
		this.input = {
			"data_d": new StackDataInput_data_d(),
			"stack_s": new StackDataInput_stack_s(),
		}
		this.output = {
			"data_d": new StackDataOutput_data_d(),
		}
	}

}

class StackDataInput_data_d extends ResthopperParameter {

	public name: string = "Data";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class StackDataInput_stack_s extends ResthopperParameter {

	public name: string = "Stack";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class StackDataOutput_data_d extends ResthopperParameter {

	public name: string = "Data";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
