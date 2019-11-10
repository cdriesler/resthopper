import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class LinePlane extends ResthopperComponent {

	public guid: string = "75d0442c-1aa3-47cf-bd94-457b42c16e9f";
	public name: string = "LinePlane";
	public category: string = "Intersect";
	public subCategory: string = "Mathematical";
	public description: string = "Solve intersection event for a line and a plane.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Line_L": LinePlaneInput_Line_L,
		"Plane_P": LinePlaneInput_Plane_P,
	}

	public output:
	{
		"Point_P": LinePlaneOutput_Point_P,
		"ParamL_t": LinePlaneOutput_ParamL_t,
		"ParamP_uv": LinePlaneOutput_ParamP_uv,
	}

	constructor() {
		super();
		this.input = {
			"Line_L": new LinePlaneInput_Line_L(),
			"Plane_P": new LinePlaneInput_Plane_P(),
		}
		this.output = {
			"Point_P": new LinePlaneOutput_Point_P(),
			"ParamL_t": new LinePlaneOutput_ParamL_t(),
			"ParamP_uv": new LinePlaneOutput_ParamP_uv(),
		}
	}

}

class LinePlaneInput_Line_L extends ResthopperParameter {

	public name: string = "Line";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Line;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LinePlaneInput_Plane_P extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LinePlaneOutput_Point_P extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LinePlaneOutput_ParamL_t extends ResthopperParameter {

	public name: string = "ParamL";
	public nickName: string = "t";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LinePlaneOutput_ParamP_uv extends ResthopperParameter {

	public name: string = "ParamP";
	public nickName: string = "uv";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
