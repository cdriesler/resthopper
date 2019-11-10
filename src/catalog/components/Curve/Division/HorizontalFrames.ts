import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class HorizontalFrames extends ResthopperComponent {

	public guid: string = "8d058945-ce47-4e7c-82af-3269295d7890";
	public name: string = "HorizontalFrames";
	public category: string = "Curve";
	public subCategory: string = "Division";
	public description: string = "Generate a number of equally spaced, horizontally aligned curve frames.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"Curve_C": HorizontalFramesInput_Curve_C,
		"Count_N": HorizontalFramesInput_Count_N,
	}

	public output:
	{
		"Frames_F": HorizontalFramesOutput_Frames_F,
		"Parameters_t": HorizontalFramesOutput_Parameters_t,
	}

	constructor() {
		super();
		this.input = {
			"Curve_C": new HorizontalFramesInput_Curve_C(),
			"Count_N": new HorizontalFramesInput_Count_N(),
		}
		this.output = {
			"Frames_F": new HorizontalFramesOutput_Frames_F(),
			"Parameters_t": new HorizontalFramesOutput_Parameters_t(),
		}
	}

}

class HorizontalFramesInput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class HorizontalFramesInput_Count_N extends ResthopperParameter {

	public name: string = "Count";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class HorizontalFramesOutput_Frames_F extends ResthopperParameter {

	public name: string = "Frames";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class HorizontalFramesOutput_Parameters_t extends ResthopperParameter {

	public name: string = "Parameters";
	public nickName: string = "t";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
