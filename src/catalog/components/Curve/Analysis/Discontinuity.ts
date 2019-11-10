import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Discontinuity extends ResthopperComponent {

	public guid: string = "269eaa85-9997-4d77-a9ba-4c58cb45c9d3";
	public name: string = "Discontinuity";
	public category: string = "Curve";
	public subCategory: string = "Analysis";
	public description: string = "Find all discontinuities along a curve.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"curve_c": DiscontinuityInput_curve_c,
		"level_l": DiscontinuityInput_level_l,
	}

	public output:
	{
		"points_p": DiscontinuityOutput_points_p,
		"parameters_t": DiscontinuityOutput_parameters_t,
	}

	constructor() {
		super();
		this.input = {
			"curve_c": new DiscontinuityInput_curve_c(),
			"level_l": new DiscontinuityInput_level_l(),
		}
		this.output = {
			"points_p": new DiscontinuityOutput_points_p(),
			"parameters_t": new DiscontinuityOutput_parameters_t(),
		}
	}

}

class DiscontinuityInput_curve_c extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DiscontinuityInput_level_l extends ResthopperParameter {

	public name: string = "Level";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DiscontinuityOutput_points_p extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DiscontinuityOutput_parameters_t extends ResthopperParameter {

	public name: string = "Parameters";
	public nickName: string = "t";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
