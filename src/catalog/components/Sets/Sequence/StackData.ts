import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class StackData extends ResthopperComponent {

	public guid: string = "5fa4e736-0d82-4af0-97fb-30a79f4cbf41";
	public name: string = "StackData";
	public category: string = "Sets";
	public subCategory: string = "Sequence";
	public description: string = "Duplicate individual items in a list of data";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Data_D": StackDataInput_Data_D,
		"Stack_S": StackDataInput_Stack_S,
	}

	public output:
	{
		"Data_D": StackDataOutput_Data_D,
	}

	constructor() {
		super();
		this.input = {
			"Data_D": new StackDataInput_Data_D(),
			"Stack_S": new StackDataInput_Stack_S(),
		}
		this.output = {
			"Data_D": new StackDataOutput_Data_D(),
		}
	}

}

class StackDataInput_Data_D extends ResthopperParameter {

	public name: string = "Data";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class StackDataInput_Stack_S extends ResthopperParameter {

	public name: string = "Stack";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class StackDataOutput_Data_D extends ResthopperParameter {

	public name: string = "Data";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
