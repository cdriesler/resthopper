import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class FlipPlane extends ResthopperComponent {

	public guid: string = "c73e1ed0-82a2-40b0-b4df-8f10e445d60b";
	public name: string = "FlipPlane";
	public category: string = "Vector";
	public subCategory: string = "Plane";
	public description: string = "Flip or swap the axes of a plane";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"Plane_P": FlipPlaneInput_Plane_P,
		"ReverseX_X": FlipPlaneInput_ReverseX_X,
		"ReverseY_Y": FlipPlaneInput_ReverseY_Y,
		"Swapaxes_S": FlipPlaneInput_Swapaxes_S,
	}

	public output:
	{
		"Plane_P": FlipPlaneOutput_Plane_P,
	}

	constructor() {
		super();
		this.input = {
			"Plane_P": new FlipPlaneInput_Plane_P(),
			"ReverseX_X": new FlipPlaneInput_ReverseX_X(),
			"ReverseY_Y": new FlipPlaneInput_ReverseY_Y(),
			"Swapaxes_S": new FlipPlaneInput_Swapaxes_S(),
		}
		this.output = {
			"Plane_P": new FlipPlaneOutput_Plane_P(),
		}
	}

}

class FlipPlaneInput_Plane_P extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FlipPlaneInput_ReverseX_X extends ResthopperParameter {

	public name: string = "ReverseX";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FlipPlaneInput_ReverseY_Y extends ResthopperParameter {

	public name: string = "ReverseY";
	public nickName: string = "Y";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FlipPlaneInput_Swapaxes_S extends ResthopperParameter {

	public name: string = "Swapaxes";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FlipPlaneOutput_Plane_P extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
