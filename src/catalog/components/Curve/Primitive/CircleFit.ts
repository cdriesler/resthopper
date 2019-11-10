import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CircleFit extends ResthopperComponent {

	public guid: string = "be52336f-a2e1-43b1-b5f5-178ba489508a";
	public name: string = "CircleFit";
	public category: string = "Curve";
	public subCategory: string = "Primitive";
	public description: string = "Fit a circle to a collection of points.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"points_p": CircleFitInput_points_p,
	}

	public output:
	{
		"circle_c": CircleFitOutput_circle_c,
		"radius_r": CircleFitOutput_radius_r,
		"deviation_d": CircleFitOutput_deviation_d,
	}

	constructor() {
		super();
		this.input = {
			"points_p": new CircleFitInput_points_p(),
		}
		this.output = {
			"circle_c": new CircleFitOutput_circle_c(),
			"radius_r": new CircleFitOutput_radius_r(),
			"deviation_d": new CircleFitOutput_deviation_d(),
		}
	}

}

class CircleFitInput_points_p extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CircleFitOutput_circle_c extends ResthopperParameter {

	public name: string = "Circle";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Circle"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CircleFitOutput_radius_r extends ResthopperParameter {

	public name: string = "Radius";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CircleFitOutput_deviation_d extends ResthopperParameter {

	public name: string = "Deviation";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
