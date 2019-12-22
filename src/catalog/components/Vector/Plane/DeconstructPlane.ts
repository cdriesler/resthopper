import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class DeconstructPlane extends ResthopperComponent {

	public guid: string = "3cd2949b-4ea8-4ffb-a70c-5c380f9f46ea";
	public name: string = "Deconstruct Plane";
	public nickName: string = "DePlane";
	public category: string = "Vector";
	public subCategory: string = "Plane";
	public description: string = "Deconstruct a plane into its component parts.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"plane_p": DeconstructPlaneInput_plane_p,
	}

	public output:
	{
		"origin_o": DeconstructPlaneOutput_origin_o,
		"xaxis_x": DeconstructPlaneOutput_xaxis_x,
		"yaxis_y": DeconstructPlaneOutput_yaxis_y,
		"zaxis_z": DeconstructPlaneOutput_zaxis_z,
	}

	constructor() {
		super();
		this.input = {
			"plane_p": new DeconstructPlaneInput_plane_p(),
		}
		this.output = {
			"origin_o": new DeconstructPlaneOutput_origin_o(),
			"xaxis_x": new DeconstructPlaneOutput_xaxis_x(),
			"yaxis_y": new DeconstructPlaneOutput_yaxis_y(),
			"zaxis_z": new DeconstructPlaneOutput_zaxis_z(),
		}
	}

}

class DeconstructPlaneInput_plane_p extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public description: string = "Empty Plane parameter"
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeconstructPlaneOutput_origin_o extends ResthopperParameter {

	public name: string = "Origin";
	public nickName: string = "O";
	public description: string = "Empty Point parameter"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeconstructPlaneOutput_xaxis_x extends ResthopperParameter {

	public name: string = "XAxis";
	public nickName: string = "X";
	public description: string = "Empty Vector parameter"
	public isOptional: boolean = false;
	public typeName: string = "Vector"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeconstructPlaneOutput_yaxis_y extends ResthopperParameter {

	public name: string = "YAxis";
	public nickName: string = "Y";
	public description: string = "Empty Vector parameter"
	public isOptional: boolean = false;
	public typeName: string = "Vector"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeconstructPlaneOutput_zaxis_z extends ResthopperParameter {

	public name: string = "ZAxis";
	public nickName: string = "Z";
	public description: string = "Empty Vector parameter"
	public isOptional: boolean = false;
	public typeName: string = "Vector"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
