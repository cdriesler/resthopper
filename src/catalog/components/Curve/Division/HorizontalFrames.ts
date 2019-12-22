import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class HorizontalFrames extends ResthopperComponent {

	public guid: string = "8d058945-ce47-4e7c-82af-3269295d7890";
	public name: string = "Horizontal Frames";
	public nickName: string = "HFrames";
	public category: string = "Curve";
	public subCategory: string = "Division";
	public description: string = "Generate a number of equally spaced, horizontally aligned curve frames.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"curve_c": HorizontalFramesInput_curve_c,
		"count_n": HorizontalFramesInput_count_n,
	}

	public output:
	{
		"frames_f": HorizontalFramesOutput_frames_f,
		"parameters_t": HorizontalFramesOutput_parameters_t,
	}

	constructor() {
		super();
		this.input = {
			"curve_c": new HorizontalFramesInput_curve_c(),
			"count_n": new HorizontalFramesInput_count_n(),
		}
		this.output = {
			"frames_f": new HorizontalFramesOutput_frames_f(),
			"parameters_t": new HorizontalFramesOutput_parameters_t(),
		}
	}

}

class HorizontalFramesInput_curve_c extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public description: string = "Empty Curve parameter"
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class HorizontalFramesInput_count_n extends ResthopperParameter {

	public name: string = "Count";
	public nickName: string = "N";
	public description: string = "Empty Integer parameter"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class HorizontalFramesOutput_frames_f extends ResthopperParameter {

	public name: string = "Frames";
	public nickName: string = "F";
	public description: string = "Empty Plane parameter"
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class HorizontalFramesOutput_parameters_t extends ResthopperParameter {

	public name: string = "Parameters";
	public nickName: string = "t";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
