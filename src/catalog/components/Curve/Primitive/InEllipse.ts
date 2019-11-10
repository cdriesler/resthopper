import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class InEllipse extends ResthopperComponent {

	public guid: string = "679a9c6a-ab97-4c20-b02c-680f9a9a1a44";
	public name: string = "InEllipse";
	public category: string = "Curve";
	public subCategory: string = "Primitive";
	public description: string = "Create the inscribed ellipse (Steiner ellipse) of a triangle.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"cornera_a": InEllipseInput_cornera_a,
		"cornerb_b": InEllipseInput_cornerb_b,
		"cornerc_c": InEllipseInput_cornerc_c,
	}

	public output:
	{
		"ellipse_e": InEllipseOutput_ellipse_e,
		"plane_p": InEllipseOutput_plane_p,
	}

	constructor() {
		super();
		this.input = {
			"cornera_a": new InEllipseInput_cornera_a(),
			"cornerb_b": new InEllipseInput_cornerb_b(),
			"cornerc_c": new InEllipseInput_cornerc_c(),
		}
		this.output = {
			"ellipse_e": new InEllipseOutput_ellipse_e(),
			"plane_p": new InEllipseOutput_plane_p(),
		}
	}

}

class InEllipseInput_cornera_a extends ResthopperParameter {

	public name: string = "CornerA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class InEllipseInput_cornerb_b extends ResthopperParameter {

	public name: string = "CornerB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class InEllipseInput_cornerc_c extends ResthopperParameter {

	public name: string = "CornerC";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class InEllipseOutput_ellipse_e extends ResthopperParameter {

	public name: string = "Ellipse";
	public nickName: string = "E";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class InEllipseOutput_plane_p extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
