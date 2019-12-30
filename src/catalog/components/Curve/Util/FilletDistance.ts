import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class FilletDistance extends ResthopperComponent {

	public guid: string = "6fb21315-a032-400e-a80f-248687f5507f";
	public name: string = "Fillet Distance";
	public nickName: string = "Fillet";
	public category: string = "Curve";
	public subCategory: string = "Util";
	public description: string = "Fillet the sharp corners of a curve by distance.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"curve_c": FilletDistanceInput_curve_c,
		"distance_d": FilletDistanceInput_distance_d,
	}

	public output:
	{
		"curve_c": FilletDistanceOutput_curve_c,
	}

	constructor() {
		super();
		this.input = {
			"curve_c": new FilletDistanceInput_curve_c(),
			"distance_d": new FilletDistanceInput_distance_d(),
		}
		this.output = {
			"curve_c": new FilletDistanceOutput_curve_c(),
		}
	}

}

class FilletDistanceInput_curve_c extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public description: string = "Curve to fillet"
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FilletDistanceInput_distance_d extends ResthopperParameter {

	public name: string = "Distance";
	public nickName: string = "D";
	public description: string = "Distance from corner of fillet start"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FilletDistanceOutput_curve_c extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public description: string = "Curve with filleted corners"
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
