import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Contour extends ResthopperComponent {

	public guid: string = "88cff285-7f5e-41b3-96d5-9588ff9a52b1";
	public name: string = "Contour";
	public nickName: string = "Contour";
	public category: string = "Curve";
	public subCategory: string = "Division";
	public description: string = "Create a set of Curve contours";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"curve_c": ContourInput_curve_c,
		"point_p": ContourInput_point_p,
		"direction_n": ContourInput_direction_n,
		"distance_d": ContourInput_distance_d,
	}

	public output:
	{
		"contours_c": ContourOutput_contours_c,
		"parameters_t": ContourOutput_parameters_t,
	}

	constructor() {
		super();
		this.input = {
			"curve_c": new ContourInput_curve_c(),
			"point_p": new ContourInput_point_p(),
			"direction_n": new ContourInput_direction_n(),
			"distance_d": new ContourInput_distance_d(),
		}
		this.output = {
			"contours_c": new ContourOutput_contours_c(),
			"parameters_t": new ContourOutput_parameters_t(),
		}
	}

}

class ContourInput_curve_c extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

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
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ContourOutput_parameters_t extends ResthopperParameter {

	public name: string = "Parameters";
	public nickName: string = "t";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
