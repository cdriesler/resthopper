import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class OffsetLooseThreeD extends ResthopperComponent {

	public guid: string = "c6fe61e7-25e2-4333-9172-f4e2a123fcfe";
	public name: string = "OffsetLoose3D";
	public category: string = "Curve";
	public subCategory: string = "Util";
	public description: string = "Offset the control-points of a curve with a specified distance in 3D.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"curve_c": OffsetLooseThreeDInput_curve_c,
		"distance_d": OffsetLooseThreeDInput_distance_d,
	}

	public output:
	{
		"curve_c": OffsetLooseThreeDOutput_curve_c,
	}

	constructor() {
		super();
		this.input = {
			"curve_c": new OffsetLooseThreeDInput_curve_c(),
			"distance_d": new OffsetLooseThreeDInput_distance_d(),
		}
		this.output = {
			"curve_c": new OffsetLooseThreeDOutput_curve_c(),
		}
	}

}

class OffsetLooseThreeDInput_curve_c extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OffsetLooseThreeDInput_distance_d extends ResthopperParameter {

	public name: string = "Distance";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OffsetLooseThreeDOutput_curve_c extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
