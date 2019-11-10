import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SurfaceFrames extends ResthopperComponent {

	public guid: string = "332378f4-acb2-43fe-8593-ed22bfeb2721";
	public name: string = "SurfaceFrames";
	public category: string = "Surface";
	public subCategory: string = "Util";
	public description: string = "Generate a grid of {uv} frames on a surface";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"Surface_S": SurfaceFramesInput_Surface_S,
		"UCount_U": SurfaceFramesInput_UCount_U,
		"VCount_V": SurfaceFramesInput_VCount_V,
	}

	public output:
	{
		"Frames_F": SurfaceFramesOutput_Frames_F,
		"Parameters_uv": SurfaceFramesOutput_Parameters_uv,
	}

	constructor() {
		super();
		this.input = {
			"Surface_S": new SurfaceFramesInput_Surface_S(),
			"UCount_U": new SurfaceFramesInput_UCount_U(),
			"VCount_V": new SurfaceFramesInput_VCount_V(),
		}
		this.output = {
			"Frames_F": new SurfaceFramesOutput_Frames_F(),
			"Parameters_uv": new SurfaceFramesOutput_Parameters_uv(),
		}
	}

}

class SurfaceFramesInput_Surface_S extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Surface;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SurfaceFramesInput_UCount_U extends ResthopperParameter {

	public name: string = "UCount";
	public nickName: string = "U";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SurfaceFramesInput_VCount_V extends ResthopperParameter {

	public name: string = "VCount";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SurfaceFramesOutput_Frames_F extends ResthopperParameter {

	public name: string = "Frames";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SurfaceFramesOutput_Parameters_uv extends ResthopperParameter {

	public name: string = "Parameters";
	public nickName: string = "uv";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
