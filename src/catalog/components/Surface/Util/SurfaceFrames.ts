import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SurfaceFrames extends ResthopperComponent {

	public guid: string = "332378f4-acb2-43fe-8593-ed22bfeb2721";
	public name: string = "SurfaceFrames";
	public nickName: string = "SFrames";
	public category: string = "Surface";
	public subCategory: string = "Util";
	public description: string = "Generate a grid of {uv} frames on a surface";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"surface_s": SurfaceFramesInput_surface_s,
		"ucount_u": SurfaceFramesInput_ucount_u,
		"vcount_v": SurfaceFramesInput_vcount_v,
	}

	public output:
	{
		"frames_f": SurfaceFramesOutput_frames_f,
		"parameters_uv": SurfaceFramesOutput_parameters_uv,
	}

	constructor() {
		super();
		this.input = {
			"surface_s": new SurfaceFramesInput_surface_s(),
			"ucount_u": new SurfaceFramesInput_ucount_u(),
			"vcount_v": new SurfaceFramesInput_vcount_v(),
		}
		this.output = {
			"frames_f": new SurfaceFramesOutput_frames_f(),
			"parameters_uv": new SurfaceFramesOutput_parameters_uv(),
		}
	}

}

class SurfaceFramesInput_surface_s extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Surface"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SurfaceFramesInput_ucount_u extends ResthopperParameter {

	public name: string = "UCount";
	public nickName: string = "U";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SurfaceFramesInput_vcount_v extends ResthopperParameter {

	public name: string = "VCount";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SurfaceFramesOutput_frames_f extends ResthopperParameter {

	public name: string = "Frames";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SurfaceFramesOutput_parameters_uv extends ResthopperParameter {

	public name: string = "Parameters";
	public nickName: string = "uv";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
