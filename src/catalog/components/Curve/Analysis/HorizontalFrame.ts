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
		"Curve_C": HorizontalFrameInput_Curve_C,
		"Parameter_t": HorizontalFrameInput_Parameter_t,
	}

	public output:
	{
		"Frame_F": HorizontalFrameOutput_Frame_F,
	}

	constructor() {
		super();
		this.input = {
			"Curve_C": new HorizontalFrameInput_Curve_C(),
			"Parameter_t": new HorizontalFrameInput_Parameter_t(),
		}
		this.output = {
			"Frame_F": new HorizontalFrameOutput_Frame_F(),
		}
	}

}

class HorizontalFrameInput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class HorizontalFrameInput_Parameter_t extends ResthopperParameter {

	public name: string = "Parameter";
	public nickName: string = "t";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class HorizontalFrameOutput_Frame_F extends ResthopperParameter {

	public name: string = "Frame";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
