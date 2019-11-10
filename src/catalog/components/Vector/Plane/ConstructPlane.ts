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
		"Origin_O": ConstructPlaneInput_Origin_O,
		"XAxis_X": ConstructPlaneInput_XAxis_X,
		"YAxis_Y": ConstructPlaneInput_YAxis_Y,
	}

	public output:
	{
		"Plane_Pl": ConstructPlaneOutput_Plane_Pl,
	}

	constructor() {
		super();
		this.input = {
			"Origin_O": new ConstructPlaneInput_Origin_O(),
			"XAxis_X": new ConstructPlaneInput_XAxis_X(),
			"YAxis_Y": new ConstructPlaneInput_YAxis_Y(),
		}
		this.output = {
			"Plane_Pl": new ConstructPlaneOutput_Plane_Pl(),
		}
	}

}

class ConstructPlaneInput_Origin_O extends ResthopperParameter {

	public name: string = "Origin";
	public nickName: string = "O";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConstructPlaneInput_XAxis_X extends ResthopperParameter {

	public name: string = "XAxis";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConstructPlaneInput_YAxis_Y extends ResthopperParameter {

	public name: string = "YAxis";
	public nickName: string = "Y";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConstructPlaneOutput_Plane_Pl extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "Pl";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
