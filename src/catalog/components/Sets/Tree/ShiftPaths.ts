import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ShiftPaths extends ResthopperComponent {

	public guid: string = "2d61f4e0-47c5-41d6-a41d-6afa96ee63af";
	public name: string = "ShiftPaths";
	public category: string = "Sets";
	public subCategory: string = "Tree";
	public description: string = "Shift the indices in all data tree paths";
	public isObsolete: boolean = false;

	public library: string = "Grasshopper";

	public input:
	{
		"Data_D": ShiftPathsInput_Data_D,
		"Offset_O": ShiftPathsInput_Offset_O,
	}

	public output:
	{
		"Data_D": ShiftPathsOutput_Data_D,
	}

	constructor() {
		super();
		this.input = {
			"Data_D": new ShiftPathsInput_Data_D(),
			"Offset_O": new ShiftPathsInput_Offset_O(),
		}
		this.output = {
			"Data_D": new ShiftPathsOutput_Data_D(),
		}
	}

}

class ShiftPathsInput_Data_D extends ResthopperParameter {

	public name: string = "Data";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ShiftPathsInput_Offset_O extends ResthopperParameter {

	public name: string = "Offset";
	public nickName: string = "O";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ShiftPathsOutput_Data_D extends ResthopperParameter {

	public name: string = "Data";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
