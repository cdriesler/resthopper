import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class FlipPlane extends ResthopperComponent {

	public guid: string = "c73e1ed0-82a2-40b0-b4df-8f10e445d60b";
	public name: string = "FlipPlane";
	public nickName: string = "PFlip";
	public category: string = "Vector";
	public subCategory: string = "Plane";
	public description: string = "Flip or swap the axes of a plane";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"plane_p": FlipPlaneInput_plane_p,
		"reversex_x": FlipPlaneInput_reversex_x,
		"reversey_y": FlipPlaneInput_reversey_y,
		"swapaxes_s": FlipPlaneInput_swapaxes_s,
	}

	public output:
	{
		"plane_p": FlipPlaneOutput_plane_p,
	}

	constructor() {
		super();
		this.input = {
			"plane_p": new FlipPlaneInput_plane_p(),
			"reversex_x": new FlipPlaneInput_reversex_x(),
			"reversey_y": new FlipPlaneInput_reversey_y(),
			"swapaxes_s": new FlipPlaneInput_swapaxes_s(),
		}
		this.output = {
			"plane_p": new FlipPlaneOutput_plane_p(),
		}
	}

}

class FlipPlaneInput_plane_p extends ResthopperParameter {

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

class FlipPlaneInput_reversex_x extends ResthopperParameter {

	public name: string = "ReverseX";
	public nickName: string = "X";
	public description: string = "Empty Boolean parameter"
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FlipPlaneInput_reversey_y extends ResthopperParameter {

	public name: string = "ReverseY";
	public nickName: string = "Y";
	public description: string = "Empty Boolean parameter"
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FlipPlaneInput_swapaxes_s extends ResthopperParameter {

	public name: string = "Swapaxes";
	public nickName: string = "S";
	public description: string = "Empty Boolean parameter"
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FlipPlaneOutput_plane_p extends ResthopperParameter {

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
