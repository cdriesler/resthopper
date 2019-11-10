import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Absolute extends ResthopperComponent {

	public guid: string = "28124995-cf99-4298-b6f4-c75a8e379f18";
	public name: string = "Absolute";
	public category: string = "Maths";
	public subCategory: string = "Operators";
	public description: string = "Compute the absolute of a value.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Value_x": AbsoluteInput_Value_x,
	}

	public output:
	{
		"Result_y": AbsoluteOutput_Result_y,
	}

	constructor() {
		super();
		this.input = {
			"Value_x": new AbsoluteInput_Value_x(),
		}
		this.output = {
			"Result_y": new AbsoluteOutput_Result_y(),
		}
	}

}

class AbsoluteInput_Value_x extends ResthopperParameter {

	public name: string = "Value";
	public nickName: string = "x";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AbsoluteOutput_Result_y extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "y";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
