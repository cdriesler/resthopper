import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class InCircle extends ResthopperComponent {

	public guid: string = "28b1c4d4-ab1c-4309-accd-1b7a954ed948";
	public name: string = "InCircle";
	public category: string = "Curve";
	public subCategory: string = "Primitive";
	public description: string = "Create the incircle of a triangle.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"CornerA_A": InCircleInput_CornerA_A,
		"CornerB_B": InCircleInput_CornerB_B,
		"CornerC_C": InCircleInput_CornerC_C,
	}

	public output:
	{
		"Circle_C": InCircleOutput_Circle_C,
		"Plane_P": InCircleOutput_Plane_P,
		"Radius_R": InCircleOutput_Radius_R,
	}

	constructor() {
		super();
		this.input = {
			"CornerA_A": new InCircleInput_CornerA_A(),
			"CornerB_B": new InCircleInput_CornerB_B(),
			"CornerC_C": new InCircleInput_CornerC_C(),
		}
		this.output = {
			"Circle_C": new InCircleOutput_Circle_C(),
			"Plane_P": new InCircleOutput_Plane_P(),
			"Radius_R": new InCircleOutput_Radius_R(),
		}
	}

}

class InCircleInput_CornerA_A extends ResthopperParameter {

	public name: string = "CornerA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class InCircleInput_CornerB_B extends ResthopperParameter {

	public name: string = "CornerB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class InCircleInput_CornerC_C extends ResthopperParameter {

	public name: string = "CornerC";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class InCircleOutput_Circle_C extends ResthopperParameter {

	public name: string = "Circle";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Circle;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class InCircleOutput_Plane_P extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class InCircleOutput_Radius_R extends ResthopperParameter {

	public name: string = "Radius";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
