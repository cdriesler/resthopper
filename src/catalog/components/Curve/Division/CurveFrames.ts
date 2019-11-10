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
	public isVariable: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"curve_c": CurveFramesInput_curve_c,
		"count_n": CurveFramesInput_count_n,
	}

	public output:
	{
		"frames_f": CurveFramesOutput_frames_f,
		"parameters_t": CurveFramesOutput_parameters_t,
	}

	constructor() {
		super();
		this.input = {
			"curve_c": new CurveFramesInput_curve_c(),
			"count_n": new CurveFramesInput_count_n(),
		}
		this.output = {
			"frames_f": new CurveFramesOutput_frames_f(),
			"parameters_t": new CurveFramesOutput_parameters_t(),
		}
	}

}

class CurveFramesInput_curve_c extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveFramesInput_count_n extends ResthopperParameter {

	public name: string = "Count";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveFramesOutput_frames_f extends ResthopperParameter {

	public name: string = "Frames";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveFramesOutput_parameters_t extends ResthopperParameter {

	public name: string = "Parameters";
	public nickName: string = "t";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
