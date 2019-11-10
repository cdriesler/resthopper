import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Contourex extends ResthopperComponent {

	public guid: string = "3e7e4827-6edd-4e10-93ac-cc234414d2b9";
	public name: string = "Contourex";
	public category: string = "Curve";
	public subCategory: string = "Division";
	public description: string = "Create a set of Curve contours";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"curve_c": ContourexInput_curve_c,
		"plane_p": ContourexInput_plane_p,
		"offsets_o": ContourexInput_offsets_o,
		"distances_d": ContourexInput_distances_d,
	}

	public output:
	{
		"contours_c": ContourexOutput_contours_c,
		"parameters_t": ContourexOutput_parameters_t,
	}

	constructor() {
		super();
		this.input = {
			"curve_c": new ContourexInput_curve_c(),
			"plane_p": new ContourexInput_plane_p(),
			"offsets_o": new ContourexInput_offsets_o(),
			"distances_d": new ContourexInput_distances_d(),
		}
		this.output = {
			"contours_c": new ContourexOutput_contours_c(),
			"parameters_t": new ContourexOutput_parameters_t(),
		}
	}

}

class ContourexInput_curve_c extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ContourexInput_plane_p extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ContourexInput_offsets_o extends ResthopperParameter {

	public name: string = "Offsets";
	public nickName: string = "O";
	public isOptional: boolean = true;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ContourexInput_distances_d extends ResthopperParameter {

	public name: string = "Distances";
	public nickName: string = "D";
	public isOptional: boolean = true;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ContourexOutput_contours_c extends ResthopperParameter {

	public name: string = "Contours";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ContourexOutput_parameters_t extends ResthopperParameter {

	public name: string = "Parameters";
	public nickName: string = "t";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
