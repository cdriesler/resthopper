import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Absolute extends ResthopperComponent {

	public guid: string = "28124995-cf99-4298-b6f4-c75a8e379f18";
	public name: string = "Absolute";
	public nickName: string = "Abs";
	public category: string = "Maths";
	public subCategory: string = "Operators";
	public description: string = "Compute the absolute of a value.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"value_x": AbsoluteInput_value_x,
	}

	public output:
	{
		"result_y": AbsoluteOutput_result_y,
	}

	constructor() {
		super();
		this.input = {
			"value_x": new AbsoluteInput_value_x(),
		}
		this.output = {
			"result_y": new AbsoluteOutput_result_y(),
		}
	}

}

class AbsoluteInput_value_x extends ResthopperParameter {

	public name: string = "Value";
	public nickName: string = "x";
	public description: string = "Empty Generic Data parameter"
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AbsoluteOutput_result_y extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "y";
	public description: string = "Empty Generic Data parameter"
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
