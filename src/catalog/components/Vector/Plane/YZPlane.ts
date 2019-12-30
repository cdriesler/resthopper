import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class YZPlane extends ResthopperComponent {

	public guid: string = "fad344bc-09b1-4855-a2e6-437ef5715fe3";
	public name: string = "YZ Plane";
	public nickName: string = "YZ";
	public category: string = "Vector";
	public subCategory: string = "Plane";
	public description: string = "World YZ plane.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"origin_o": YZPlaneInput_origin_o,
	}

	public output:
	{
		"plane_p": YZPlaneOutput_plane_p,
	}

	constructor() {
		super();
		this.input = {
			"origin_o": new YZPlaneInput_origin_o(),
		}
		this.output = {
			"plane_p": new YZPlaneOutput_plane_p(),
		}
	}

}

class YZPlaneInput_origin_o extends ResthopperParameter {

	public name: string = "Origin";
	public nickName: string = "O";
	public description: string = "Origin of plane"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class YZPlaneOutput_plane_p extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public description: string = "World YZ plane"
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
