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
		"centers_c": SwingArcInput_centers_c,
		"plane_p": SwingArcInput_plane_p,
		"radius_r": SwingArcInput_radius_r,
	}

	public output:
	{
		"curvea_a": SwingArcOutput_curvea_a,
		"curveb_b": SwingArcOutput_curveb_b,
		"circles_c": SwingArcOutput_circles_c,
	}

	constructor() {
		super();
		this.input = {
			"centers_c": new SwingArcInput_centers_c(),
			"plane_p": new SwingArcInput_plane_p(),
			"radius_r": new SwingArcInput_radius_r(),
		}
		this.output = {
			"curvea_a": new SwingArcOutput_curvea_a(),
			"curveb_b": new SwingArcOutput_curveb_b(),
			"circles_c": new SwingArcOutput_circles_c(),
		}
	}

}

class SwingArcInput_centers_c extends ResthopperParameter {

	public name: string = "Centers";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SwingArcInput_plane_p extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = true;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SwingArcInput_radius_r extends ResthopperParameter {

	public name: string = "Radius";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SwingArcOutput_curvea_a extends ResthopperParameter {

	public name: string = "CurveA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SwingArcOutput_curveb_b extends ResthopperParameter {

	public name: string = "CurveB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SwingArcOutput_circles_c extends ResthopperParameter {

	public name: string = "Circles";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Circle;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
