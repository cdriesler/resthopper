import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Ellipse extends ResthopperComponent {

	public guid: string = "46b5564d-d3eb-4bf1-ae16-15ed132cfd88";
	public name: string = "Ellipse";
	public category: string = "Curve";
	public subCategory: string = "Primitive";
	public description: string = "Create an ellipse defined by base plane and two radii.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Plane_P": EllipseInput_Plane_P,
		"Radius1_R1": EllipseInput_Radius1_R1,
		"Radius2_R2": EllipseInput_Radius2_R2,
	}

	public output:
	{
		"Ellipse_E": EllipseOutput_Ellipse_E,
		"Focus1_F1": EllipseOutput_Focus1_F1,
		"Focus2_F2": EllipseOutput_Focus2_F2,
	}

	constructor() {
		super();
		this.input = {
			"Plane_P": new EllipseInput_Plane_P(),
			"Radius1_R1": new EllipseInput_Radius1_R1(),
			"Radius2_R2": new EllipseInput_Radius2_R2(),
		}
		this.output = {
			"Ellipse_E": new EllipseOutput_Ellipse_E(),
			"Focus1_F1": new EllipseOutput_Focus1_F1(),
			"Focus2_F2": new EllipseOutput_Focus2_F2(),
		}
	}

}

class EllipseInput_Plane_P extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EllipseInput_Radius1_R1 extends ResthopperParameter {

	public name: string = "Radius1";
	public nickName: string = "R1";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EllipseInput_Radius2_R2 extends ResthopperParameter {

	public name: string = "Radius2";
	public nickName: string = "R2";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EllipseOutput_Ellipse_E extends ResthopperParameter {

	public name: string = "Ellipse";
	public nickName: string = "E";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EllipseOutput_Focus1_F1 extends ResthopperParameter {

	public name: string = "Focus1";
	public nickName: string = "F1";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EllipseOutput_Focus2_F2 extends ResthopperParameter {

	public name: string = "Focus2";
	public nickName: string = "F2";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
