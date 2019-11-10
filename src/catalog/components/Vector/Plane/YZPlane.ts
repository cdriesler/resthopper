import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class YZPlane extends ResthopperComponent {

	public guid: string = "fad344bc-09b1-4855-a2e6-437ef5715fe3";
	public name: string = "YZPlane";
	public category: string = "Vector";
	public subCategory: string = "Plane";
	public description: string = "World YZ plane.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"Origin_O": YZPlaneInput_Origin_O,
	}

	public output:
	{
		"Plane_P": YZPlaneOutput_Plane_P,
	}

	constructor() {
		super();
		this.input = {
			"Origin_O": new YZPlaneInput_Origin_O(),
		}
		this.output = {
			"Plane_P": new YZPlaneOutput_Plane_P(),
		}
	}

}

class YZPlaneInput_Origin_O extends ResthopperParameter {

	public name: string = "Origin";
	public nickName: string = "O";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class YZPlaneOutput_Plane_P extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
