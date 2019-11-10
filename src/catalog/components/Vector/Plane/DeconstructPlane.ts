import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class DeconstructPlane extends ResthopperComponent {

	public guid: string = "3cd2949b-4ea8-4ffb-a70c-5c380f9f46ea";
	public name: string = "DeconstructPlane";
	public category: string = "Vector";
	public subCategory: string = "Plane";
	public description: string = "Deconstruct a plane into its component parts.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"Plane_P": DeconstructPlaneInput_Plane_P,
	}

	public output:
	{
		"Origin_O": DeconstructPlaneOutput_Origin_O,
		"XAxis_X": DeconstructPlaneOutput_XAxis_X,
		"YAxis_Y": DeconstructPlaneOutput_YAxis_Y,
		"ZAxis_Z": DeconstructPlaneOutput_ZAxis_Z,
	}

	constructor() {
		super();
		this.input = {
			"Plane_P": new DeconstructPlaneInput_Plane_P(),
		}
		this.output = {
			"Origin_O": new DeconstructPlaneOutput_Origin_O(),
			"XAxis_X": new DeconstructPlaneOutput_XAxis_X(),
			"YAxis_Y": new DeconstructPlaneOutput_YAxis_Y(),
			"ZAxis_Z": new DeconstructPlaneOutput_ZAxis_Z(),
		}
	}

}

class DeconstructPlaneInput_Plane_P extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeconstructPlaneOutput_Origin_O extends ResthopperParameter {

	public name: string = "Origin";
	public nickName: string = "O";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeconstructPlaneOutput_XAxis_X extends ResthopperParameter {

	public name: string = "XAxis";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeconstructPlaneOutput_YAxis_Y extends ResthopperParameter {

	public name: string = "YAxis";
	public nickName: string = "Y";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeconstructPlaneOutput_ZAxis_Z extends ResthopperParameter {

	public name: string = "ZAxis";
	public nickName: string = "Z";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
