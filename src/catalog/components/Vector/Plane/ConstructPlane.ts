import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ConstructPlane extends ResthopperComponent {

	public guid: string = "bc3e379e-7206-4e7b-b63a-ff61f4b38a3e";
	public name: string = "ConstructPlane";
	public category: string = "Vector";
	public subCategory: string = "Plane";
	public description: string = "Construct a plane from an origin point and {x}, {y} axes.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"origin_o": ConstructPlaneInput_origin_o,
		"xaxis_x": ConstructPlaneInput_xaxis_x,
		"yaxis_y": ConstructPlaneInput_yaxis_y,
	}

	public output:
	{
		"plane_pl": ConstructPlaneOutput_plane_pl,
	}

	constructor() {
		super();
		this.input = {
			"origin_o": new ConstructPlaneInput_origin_o(),
			"xaxis_x": new ConstructPlaneInput_xaxis_x(),
			"yaxis_y": new ConstructPlaneInput_yaxis_y(),
		}
		this.output = {
			"plane_pl": new ConstructPlaneOutput_plane_pl(),
		}
	}

}

class ConstructPlaneInput_origin_o extends ResthopperParameter {

	public name: string = "Origin";
	public nickName: string = "O";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConstructPlaneInput_xaxis_x extends ResthopperParameter {

	public name: string = "XAxis";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConstructPlaneInput_yaxis_y extends ResthopperParameter {

	public name: string = "YAxis";
	public nickName: string = "Y";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConstructPlaneOutput_plane_pl extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "Pl";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
