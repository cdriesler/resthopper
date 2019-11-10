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
		"Points_P": CircleFitInput_Points_P,
	}

	public output:
	{
		"Circle_C": CircleFitOutput_Circle_C,
		"Radius_R": CircleFitOutput_Radius_R,
		"Deviation_D": CircleFitOutput_Deviation_D,
	}

	constructor() {
		super();
		this.input = {
			"Points_P": new CircleFitInput_Points_P(),
		}
		this.output = {
			"Circle_C": new CircleFitOutput_Circle_C(),
			"Radius_R": new CircleFitOutput_Radius_R(),
			"Deviation_D": new CircleFitOutput_Deviation_D(),
		}
	}

}

class CircleFitInput_Points_P extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CircleFitOutput_Circle_C extends ResthopperParameter {

	public name: string = "Circle";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Circle;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CircleFitOutput_Radius_R extends ResthopperParameter {

	public name: string = "Radius";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CircleFitOutput_Deviation_D extends ResthopperParameter {

	public name: string = "Deviation";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
