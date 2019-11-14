import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PerpFrame extends ResthopperComponent {

	public guid: string = "69f3e5ee-4770-44b3-8851-ae10ae555398";
	public name: string = "PerpFrame";
	public nickName: string = "PFrame";
	public category: string = "Curve";
	public subCategory: string = "Analysis";
	public description: string = "Solve the perpendicular (zero-twisting) frame at a specified curve parameter.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"curve_c": PerpFrameInput_curve_c,
		"parameter_t": PerpFrameInput_parameter_t,
	}

	public output:
	{
		"frame_f": PerpFrameOutput_frame_f,
	}

	constructor() {
		super();
		this.input = {
			"curve_c": new PerpFrameInput_curve_c(),
			"parameter_t": new PerpFrameInput_parameter_t(),
		}
		this.output = {
			"frame_f": new PerpFrameOutput_frame_f(),
		}
	}

}

class PerpFrameInput_curve_c extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PerpFrameInput_parameter_t extends ResthopperParameter {

	public name: string = "Parameter";
	public nickName: string = "t";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PerpFrameOutput_frame_f extends ResthopperParameter {

	public name: string = "Frame";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
