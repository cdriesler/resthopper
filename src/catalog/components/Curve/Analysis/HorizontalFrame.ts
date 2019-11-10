import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class HorizontalFrame extends ResthopperComponent {

	public guid: string = "c048ad76-ffcd-43b1-a007-4dd1b2373326";
	public name: string = "HorizontalFrame";
	public category: string = "Curve";
	public subCategory: string = "Analysis";
	public description: string = "Get a horizontally aligned frame along a curve at a specified parameter.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"curve_c": HorizontalFrameInput_curve_c,
		"parameter_t": HorizontalFrameInput_parameter_t,
	}

	public output:
	{
		"frame_f": HorizontalFrameOutput_frame_f,
	}

	constructor() {
		super();
		this.input = {
			"curve_c": new HorizontalFrameInput_curve_c(),
			"parameter_t": new HorizontalFrameInput_parameter_t(),
		}
		this.output = {
			"frame_f": new HorizontalFrameOutput_frame_f(),
		}
	}

}

class HorizontalFrameInput_curve_c extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class HorizontalFrameInput_parameter_t extends ResthopperParameter {

	public name: string = "Parameter";
	public nickName: string = "t";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class HorizontalFrameOutput_frame_f extends ResthopperParameter {

	public name: string = "Frame";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
