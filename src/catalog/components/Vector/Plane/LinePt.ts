import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class LinePt extends ResthopperComponent {

	public guid: string = "ccc3f2ff-c9f6-45f8-aa30-8a924a9bda36";
	public name: string = "LinePt";
	public nickName: string = "LnPt";
	public category: string = "Vector";
	public subCategory: string = "Plane";
	public description: string = "Create a plane from a line and a point.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"line_l": LinePtInput_line_l,
		"point_p": LinePtInput_point_p,
	}

	public output:
	{
		"plane_pl": LinePtOutput_plane_pl,
	}

	constructor() {
		super();
		this.input = {
			"line_l": new LinePtInput_line_l(),
			"point_p": new LinePtInput_point_p(),
		}
		this.output = {
			"plane_pl": new LinePtOutput_plane_pl(),
		}
	}

}

class LinePtInput_line_l extends ResthopperParameter {

	public name: string = "Line";
	public nickName: string = "L";
	public description: string = "Empty Line parameter"
	public isOptional: boolean = false;
	public typeName: string = "Line"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LinePtInput_point_p extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public description: string = "Empty Point parameter"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LinePtOutput_plane_pl extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "Pl";
	public description: string = "Empty Plane parameter"
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
