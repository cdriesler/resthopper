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
		"Curve_C": ControlPointsInput_Curve_C,
	}

	public output:
	{
		"Points_P": ControlPointsOutput_Points_P,
		"Weights_W": ControlPointsOutput_Weights_W,
		"Knots_K": ControlPointsOutput_Knots_K,
	}

	constructor() {
		super();
		this.input = {
			"Curve_C": new ControlPointsInput_Curve_C(),
		}
		this.output = {
			"Points_P": new ControlPointsOutput_Points_P(),
			"Weights_W": new ControlPointsOutput_Weights_W(),
			"Knots_K": new ControlPointsOutput_Knots_K(),
		}
	}

}

class ControlPointsInput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ControlPointsOutput_Points_P extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ControlPointsOutput_Weights_W extends ResthopperParameter {

	public name: string = "Weights";
	public nickName: string = "W";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ControlPointsOutput_Knots_K extends ResthopperParameter {

	public name: string = "Knots";
	public nickName: string = "K";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
