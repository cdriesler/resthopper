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
		"line_l": LinePlaneInput_line_l,
		"plane_p": LinePlaneInput_plane_p,
	}

	public output:
	{
		"point_p": LinePlaneOutput_point_p,
		"paraml_t": LinePlaneOutput_paraml_t,
		"paramp_uv": LinePlaneOutput_paramp_uv,
	}

	constructor() {
		super();
		this.input = {
			"line_l": new LinePlaneInput_line_l(),
			"plane_p": new LinePlaneInput_plane_p(),
		}
		this.output = {
			"point_p": new LinePlaneOutput_point_p(),
			"paraml_t": new LinePlaneOutput_paraml_t(),
			"paramp_uv": new LinePlaneOutput_paramp_uv(),
		}
	}

}

class LinePlaneInput_line_l extends ResthopperParameter {

	public name: string = "Line";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Line"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LinePlaneInput_plane_p extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LinePlaneOutput_point_p extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LinePlaneOutput_paraml_t extends ResthopperParameter {

	public name: string = "ParamL";
	public nickName: string = "t";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LinePlaneOutput_paramp_uv extends ResthopperParameter {

	public name: string = "ParamP";
	public nickName: string = "uv";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
