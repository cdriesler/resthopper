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

	public library: string = "Vector Components";

	public input:
	{
		"Curve_C": PerpFramesInput_Curve_C,
		"Count_N": PerpFramesInput_Count_N,
		"Align_A": PerpFramesInput_Align_A,
	}

	public output:
	{
		"Frames_F": PerpFramesOutput_Frames_F,
		"Parameters_t": PerpFramesOutput_Parameters_t,
	}

	constructor() {
		super();
		this.input = {
			"Curve_C": new PerpFramesInput_Curve_C(),
			"Count_N": new PerpFramesInput_Count_N(),
			"Align_A": new PerpFramesInput_Align_A(),
		}
		this.output = {
			"Frames_F": new PerpFramesOutput_Frames_F(),
			"Parameters_t": new PerpFramesOutput_Parameters_t(),
		}
	}

}

class PerpFramesInput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PerpFramesInput_Count_N extends ResthopperParameter {

	public name: string = "Count";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PerpFramesInput_Align_A extends ResthopperParameter {

	public name: string = "Align";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PerpFramesOutput_Frames_F extends ResthopperParameter {

	public name: string = "Frames";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PerpFramesOutput_Parameters_t extends ResthopperParameter {

	public name: string = "Parameters";
	public nickName: string = "t";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
