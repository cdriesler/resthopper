import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Extremes extends ResthopperComponent {

	public guid: string = "ebd6c758-19ae-4d74-aed7-b8a0392ff743";
	public name: string = "Extremes";
	public category: string = "Curve";
	public subCategory: string = "Analysis";
	public description: string = "Find the extremes (highest and lowest points) on a curve.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"curve_c": ExtremesInput_curve_c,
		"plane_p": ExtremesInput_plane_p,
	}

	public output:
	{
		"highest_h": ExtremesOutput_highest_h,
		"lowest_l": ExtremesOutput_lowest_l,
	}

	constructor() {
		super();
		this.input = {
			"curve_c": new ExtremesInput_curve_c(),
			"plane_p": new ExtremesInput_plane_p(),
		}
		this.output = {
			"highest_h": new ExtremesOutput_highest_h(),
			"lowest_l": new ExtremesOutput_lowest_l(),
		}
	}

}

class ExtremesInput_curve_c extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ExtremesInput_plane_p extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ExtremesOutput_highest_h extends ResthopperParameter {

	public name: string = "Highest";
	public nickName: string = "H";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ExtremesOutput_lowest_l extends ResthopperParameter {

	public name: string = "Lowest";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
