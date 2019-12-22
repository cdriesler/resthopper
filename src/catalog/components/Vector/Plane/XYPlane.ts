import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class XYPlane extends ResthopperComponent {

	public guid: string = "17b7152b-d30d-4d50-b9ef-c9fe25576fc2";
	public name: string = "XY Plane";
	public nickName: string = "XY";
	public category: string = "Vector";
	public subCategory: string = "Plane";
	public description: string = "World XY plane.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"origin_o": XYPlaneInput_origin_o,
	}

	public output:
	{
		"plane_p": XYPlaneOutput_plane_p,
	}

	constructor() {
		super();
		this.input = {
			"origin_o": new XYPlaneInput_origin_o(),
		}
		this.output = {
			"plane_p": new XYPlaneOutput_plane_p(),
		}
	}

}

class XYPlaneInput_origin_o extends ResthopperParameter {

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

class XYPlaneOutput_plane_p extends ResthopperParameter {

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
