import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PerpFrame extends ResthopperComponent {

	public guid: string = "69f3e5ee-4770-44b3-8851-ae10ae555398";
	public name: string = "PerpFrame";
	public category: string = "Curve";
	public subCategory: string = "Analysis";
	public description: string = "Solve the perpendicular (zero-twisting) frame at a specified curve parameter.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"Curve_C": PerpFrameInput_Curve_C,
		"Parameter_t": PerpFrameInput_Parameter_t,
	}

	public output:
	{
		"Frame_F": PerpFrameOutput_Frame_F,
	}

	constructor() {
		super();
		this.input = {
			"Curve_C": new PerpFrameInput_Curve_C(),
			"Parameter_t": new PerpFrameInput_Parameter_t(),
		}
		this.output = {
			"Frame_F": new PerpFrameOutput_Frame_F(),
		}
	}

}

class PerpFrameInput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PerpFrameInput_Parameter_t extends ResthopperParameter {

	public name: string = "Parameter";
	public nickName: string = "t";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PerpFrameOutput_Frame_F extends ResthopperParameter {

	public name: string = "Frame";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
