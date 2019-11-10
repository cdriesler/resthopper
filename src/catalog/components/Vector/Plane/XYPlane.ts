import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class XYPlane extends ResthopperComponent {

	public guid: string = "17b7152b-d30d-4d50-b9ef-c9fe25576fc2";
	public name: string = "XYPlane";
	public category: string = "Vector";
	public subCategory: string = "Plane";
	public description: string = "World XY plane.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"Origin_O": XYPlaneInput_Origin_O,
	}

	public output:
	{
		"Plane_P": XYPlaneOutput_Plane_P,
	}

	constructor() {
		super();
		this.input = {
			"Origin_O": new XYPlaneInput_Origin_O(),
		}
		this.output = {
			"Plane_P": new XYPlaneOutput_Plane_P(),
		}
	}

}

class XYPlaneInput_Origin_O extends ResthopperParameter {

	public name: string = "Origin";
	public nickName: string = "O";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class XYPlaneOutput_Plane_P extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
