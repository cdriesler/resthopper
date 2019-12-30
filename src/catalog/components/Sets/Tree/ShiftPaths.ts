import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ShiftPaths extends ResthopperComponent {

	public guid: string = "2d61f4e0-47c5-41d6-a41d-6afa96ee63af";
	public name: string = "Shift Paths";
	public nickName: string = "PShift";
	public category: string = "Sets";
	public subCategory: string = "Tree";
	public description: string = "Shift the indices in all data tree paths";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Grasshopper";

	public input:
	{
		"data_d": ShiftPathsInput_data_d,
		"offset_o": ShiftPathsInput_offset_o,
	}

	public output:
	{
		"data_d": ShiftPathsOutput_data_d,
	}

	constructor() {
		super();
		this.input = {
			"data_d": new ShiftPathsInput_data_d(),
			"offset_o": new ShiftPathsInput_offset_o(),
		}
		this.output = {
			"data_d": new ShiftPathsOutput_data_d(),
		}
	}

}

class ShiftPathsInput_data_d extends ResthopperParameter {

	public name: string = "Data";
	public nickName: string = "D";
	public description: string = "Data to modify"
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ShiftPathsInput_offset_o extends ResthopperParameter {

	public name: string = "Offset";
	public nickName: string = "O";
	public description: string = "Offset to apply to each branch"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ShiftPathsOutput_data_d extends ResthopperParameter {

	public name: string = "Data";
	public nickName: string = "D";
	public description: string = "Shifted data"
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
