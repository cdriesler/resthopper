import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Ellipse extends ResthopperComponent {

	public guid: string = "46b5564d-d3eb-4bf1-ae16-15ed132cfd88";
	public name: string = "Ellipse";
	public nickName: string = "Ellipse";
	public category: string = "Curve";
	public subCategory: string = "Primitive";
	public description: string = "Create an ellipse defined by base plane and two radii.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"plane_p": EllipseInput_plane_p,
		"radius1_r1": EllipseInput_radius1_r1,
		"radius2_r2": EllipseInput_radius2_r2,
	}

	public output:
	{
		"ellipse_e": EllipseOutput_ellipse_e,
		"focus1_f1": EllipseOutput_focus1_f1,
		"focus2_f2": EllipseOutput_focus2_f2,
	}

	constructor() {
		super();
		this.input = {
			"plane_p": new EllipseInput_plane_p(),
			"radius1_r1": new EllipseInput_radius1_r1(),
			"radius2_r2": new EllipseInput_radius2_r2(),
		}
		this.output = {
			"ellipse_e": new EllipseOutput_ellipse_e(),
			"focus1_f1": new EllipseOutput_focus1_f1(),
			"focus2_f2": new EllipseOutput_focus2_f2(),
		}
	}

}

class EllipseInput_plane_p extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EllipseInput_radius1_r1 extends ResthopperParameter {

	public name: string = "Radius1";
	public nickName: string = "R1";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EllipseInput_radius2_r2 extends ResthopperParameter {

	public name: string = "Radius2";
	public nickName: string = "R2";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EllipseOutput_ellipse_e extends ResthopperParameter {

	public name: string = "Ellipse";
	public nickName: string = "E";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EllipseOutput_focus1_f1 extends ResthopperParameter {

	public name: string = "Focus1";
	public nickName: string = "F1";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EllipseOutput_focus2_f2 extends ResthopperParameter {

	public name: string = "Focus2";
	public nickName: string = "F2";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
