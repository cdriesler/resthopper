import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class LinePt extends ResthopperComponent {

	public guid: string = "ccc3f2ff-c9f6-45f8-aa30-8a924a9bda36";
	public name: string = "LinePt";
	public category: string = "Vector";
	public subCategory: string = "Plane";
	public description: string = "Create a plane from a line and a point.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"Line_L": LinePtInput_Line_L,
		"Point_P": LinePtInput_Point_P,
	}

	public output:
	{
		"Plane_Pl": LinePtOutput_Plane_Pl,
	}

	constructor() {
		super();
		this.input = {
			"Line_L": new LinePtInput_Line_L(),
			"Point_P": new LinePtInput_Point_P(),
		}
		this.output = {
			"Plane_Pl": new LinePtOutput_Plane_Pl(),
		}
	}

}

class LinePtInput_Line_L extends ResthopperParameter {

	public name: string = "Line";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Line;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LinePtInput_Point_P extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LinePtOutput_Plane_Pl extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "Pl";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
