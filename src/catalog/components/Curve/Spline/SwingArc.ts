import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SwingArc extends ResthopperComponent {

	public guid: string = "3edc4fbd-24c6-43de-aaa8-5bdf0704373d";
	public name: string = "SwingArc";
	public category: string = "Curve";
	public subCategory: string = "Spline";
	public description: string = "Create a polycurve consisting of arcs defined by center points.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Centers_C": SwingArcInput_Centers_C,
		"Plane_P": SwingArcInput_Plane_P,
		"Radius_R": SwingArcInput_Radius_R,
	}

	public output:
	{
		"CurveA_A": SwingArcOutput_CurveA_A,
		"CurveB_B": SwingArcOutput_CurveB_B,
		"Circles_C": SwingArcOutput_Circles_C,
	}

	constructor() {
		super();
		this.input = {
			"Centers_C": new SwingArcInput_Centers_C(),
			"Plane_P": new SwingArcInput_Plane_P(),
			"Radius_R": new SwingArcInput_Radius_R(),
		}
		this.output = {
			"CurveA_A": new SwingArcOutput_CurveA_A(),
			"CurveB_B": new SwingArcOutput_CurveB_B(),
			"Circles_C": new SwingArcOutput_Circles_C(),
		}
	}

}

class SwingArcInput_Centers_C extends ResthopperParameter {

	public name: string = "Centers";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SwingArcInput_Plane_P extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = true;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SwingArcInput_Radius_R extends ResthopperParameter {

	public name: string = "Radius";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SwingArcOutput_CurveA_A extends ResthopperParameter {

	public name: string = "CurveA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SwingArcOutput_CurveB_B extends ResthopperParameter {

	public name: string = "CurveB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SwingArcOutput_Circles_C extends ResthopperParameter {

	public name: string = "Circles";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Circle;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
