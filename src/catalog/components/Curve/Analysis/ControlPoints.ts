import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ControlPoints extends ResthopperComponent {

	public guid: string = "424eb433-2b3a-4859-beaf-804d8af0afd7";
	public name: string = "ControlPoints";
	public category: string = "Curve";
	public subCategory: string = "Analysis";
	public description: string = "Extract the nurbs control points and knots of a curve.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"curve_c": ControlPointsInput_curve_c,
	}

	public output:
	{
		"points_p": ControlPointsOutput_points_p,
		"weights_w": ControlPointsOutput_weights_w,
		"knots_k": ControlPointsOutput_knots_k,
	}

	constructor() {
		super();
		this.input = {
			"curve_c": new ControlPointsInput_curve_c(),
		}
		this.output = {
			"points_p": new ControlPointsOutput_points_p(),
			"weights_w": new ControlPointsOutput_weights_w(),
			"knots_k": new ControlPointsOutput_knots_k(),
		}
	}

}

class ControlPointsInput_curve_c extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ControlPointsOutput_points_p extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ControlPointsOutput_weights_w extends ResthopperParameter {

	public name: string = "Weights";
	public nickName: string = "W";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ControlPointsOutput_knots_k extends ResthopperParameter {

	public name: string = "Knots";
	public nickName: string = "K";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
