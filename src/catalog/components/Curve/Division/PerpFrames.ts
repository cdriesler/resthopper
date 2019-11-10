import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PerpFrames extends ResthopperComponent {

	public guid: string = "983c7600-980c-44da-bc53-c804067f667f";
	public name: string = "PerpFrames";
	public category: string = "Curve";
	public subCategory: string = "Division";
	public description: string = "Generate a number of equally spaced, perpendicular frames along a curve.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"curve_c": PerpFramesInput_curve_c,
		"count_n": PerpFramesInput_count_n,
		"align_a": PerpFramesInput_align_a,
	}

	public output:
	{
		"frames_f": PerpFramesOutput_frames_f,
		"parameters_t": PerpFramesOutput_parameters_t,
	}

	constructor() {
		super();
		this.input = {
			"curve_c": new PerpFramesInput_curve_c(),
			"count_n": new PerpFramesInput_count_n(),
			"align_a": new PerpFramesInput_align_a(),
		}
		this.output = {
			"frames_f": new PerpFramesOutput_frames_f(),
			"parameters_t": new PerpFramesOutput_parameters_t(),
		}
	}

}

class PerpFramesInput_curve_c extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PerpFramesInput_count_n extends ResthopperParameter {

	public name: string = "Count";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PerpFramesInput_align_a extends ResthopperParameter {

	public name: string = "Align";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PerpFramesOutput_frames_f extends ResthopperParameter {

	public name: string = "Frames";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PerpFramesOutput_parameters_t extends ResthopperParameter {

	public name: string = "Parameters";
	public nickName: string = "t";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
