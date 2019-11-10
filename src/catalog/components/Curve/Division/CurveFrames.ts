import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CurveFrames extends ResthopperComponent {

	public guid: string = "0e94542a-2e46-4793-9f98-2200b06b28f4";
	public name: string = "CurveFrames";
	public category: string = "Curve";
	public subCategory: string = "Division";
	public description: string = "Generate a number of equally spaced curve frames.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"Curve_C": CurveFramesInput_Curve_C,
		"Count_N": CurveFramesInput_Count_N,
	}

	public output:
	{
		"Frames_F": CurveFramesOutput_Frames_F,
		"Parameters_t": CurveFramesOutput_Parameters_t,
	}

	constructor() {
		super();
		this.input = {
			"Curve_C": new CurveFramesInput_Curve_C(),
			"Count_N": new CurveFramesInput_Count_N(),
		}
		this.output = {
			"Frames_F": new CurveFramesOutput_Frames_F(),
			"Parameters_t": new CurveFramesOutput_Parameters_t(),
		}
	}

}

class CurveFramesInput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveFramesInput_Count_N extends ResthopperParameter {

	public name: string = "Count";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveFramesOutput_Frames_F extends ResthopperParameter {

	public name: string = "Frames";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveFramesOutput_Parameters_t extends ResthopperParameter {

	public name: string = "Parameters";
	public nickName: string = "t";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
