import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Contour extends ResthopperComponent {

	public guid: string = "3b112fb6-3eba-42d2-ba75-0f903c18faab";
	public name: string = "Contour";
	public nickName: string = "Contour";
	public category: string = "Intersect";
	public subCategory: string = "Mathematical";
	public description: string = "Create a set of Brep or Mesh contours";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"shape_s": ContourInput_shape_s,
		"point_p": ContourInput_point_p,
		"direction_n": ContourInput_direction_n,
		"distance_d": ContourInput_distance_d,
	}

	public output:
	{
		"contours_c": ContourOutput_contours_c,
	}

	constructor() {
		super();
		this.input = {
			"shape_s": new ContourInput_shape_s(),
			"point_p": new ContourInput_point_p(),
			"direction_n": new ContourInput_direction_n(),
			"distance_d": new ContourInput_distance_d(),
		}
		this.output = {
			"contours_c": new ContourOutput_contours_c(),
		}
	}

}

class ContourInput_shape_s extends ResthopperParameter {

	public name: string = "Shape";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Geometry"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ContourInput_point_p extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ContourInput_direction_n extends ResthopperParameter {

	public name: string = "Direction";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Vector"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ContourInput_distance_d extends ResthopperParameter {

	public name: string = "Distance";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ContourOutput_contours_c extends ResthopperParameter {

	public name: string = "Contours";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
