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
		"Curve_C": ExtremesInput_Curve_C,
		"Plane_P": ExtremesInput_Plane_P,
	}

	public output:
	{
		"Highest_H": ExtremesOutput_Highest_H,
		"Lowest_L": ExtremesOutput_Lowest_L,
	}

	constructor() {
		super();
		this.input = {
			"Curve_C": new ExtremesInput_Curve_C(),
			"Plane_P": new ExtremesInput_Plane_P(),
		}
		this.output = {
			"Highest_H": new ExtremesOutput_Highest_H(),
			"Lowest_L": new ExtremesOutput_Lowest_L(),
		}
	}

}

class ExtremesInput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ExtremesInput_Plane_P extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ExtremesOutput_Highest_H extends ResthopperParameter {

	public name: string = "Highest";
	public nickName: string = "H";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ExtremesOutput_Lowest_L extends ResthopperParameter {

	public name: string = "Lowest";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
