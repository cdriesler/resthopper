import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class InCircle extends ResthopperComponent {

	public guid: string = "28b1c4d4-ab1c-4309-accd-1b7a954ed948";
	public name: string = "InCircle";
	public nickName: string = "InCircle";
	public category: string = "Curve";
	public subCategory: string = "Primitive";
	public description: string = "Create the incircle of a triangle.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"cornera_a": InCircleInput_cornera_a,
		"cornerb_b": InCircleInput_cornerb_b,
		"cornerc_c": InCircleInput_cornerc_c,
	}

	public output:
	{
		"circle_c": InCircleOutput_circle_c,
		"plane_p": InCircleOutput_plane_p,
		"radius_r": InCircleOutput_radius_r,
	}

	constructor() {
		super();
		this.input = {
			"cornera_a": new InCircleInput_cornera_a(),
			"cornerb_b": new InCircleInput_cornerb_b(),
			"cornerc_c": new InCircleInput_cornerc_c(),
		}
		this.output = {
			"circle_c": new InCircleOutput_circle_c(),
			"plane_p": new InCircleOutput_plane_p(),
			"radius_r": new InCircleOutput_radius_r(),
		}
	}

}

class InCircleInput_cornera_a extends ResthopperParameter {

	public name: string = "CornerA";
	public nickName: string = "A";
	public description: string = "First corner of triangle"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class InCircleInput_cornerb_b extends ResthopperParameter {

	public name: string = "CornerB";
	public nickName: string = "B";
	public description: string = "Second corner of triangle"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class InCircleInput_cornerc_c extends ResthopperParameter {

	public name: string = "CornerC";
	public nickName: string = "C";
	public description: string = "Third corner of triangle"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class InCircleOutput_circle_c extends ResthopperParameter {

	public name: string = "Circle";
	public nickName: string = "C";
	public description: string = "Resulting circle"
	public isOptional: boolean = false;
	public typeName: string = "Circle"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class InCircleOutput_plane_p extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public description: string = "Circle plane"
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class InCircleOutput_radius_r extends ResthopperParameter {

	public name: string = "Radius";
	public nickName: string = "R";
	public description: string = "Circle radius"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
