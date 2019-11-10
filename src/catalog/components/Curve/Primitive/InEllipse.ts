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

	public library: string = "Curve Components";

	public input:
	{
		"CornerA_A": InEllipseInput_CornerA_A,
		"CornerB_B": InEllipseInput_CornerB_B,
		"CornerC_C": InEllipseInput_CornerC_C,
	}

	public output:
	{
		"Ellipse_E": InEllipseOutput_Ellipse_E,
		"Plane_P": InEllipseOutput_Plane_P,
	}

	constructor() {
		super();
		this.input = {
			"CornerA_A": new InEllipseInput_CornerA_A(),
			"CornerB_B": new InEllipseInput_CornerB_B(),
			"CornerC_C": new InEllipseInput_CornerC_C(),
		}
		this.output = {
			"Ellipse_E": new InEllipseOutput_Ellipse_E(),
			"Plane_P": new InEllipseOutput_Plane_P(),
		}
	}

}

class InEllipseInput_CornerA_A extends ResthopperParameter {

	public name: string = "CornerA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class InEllipseInput_CornerB_B extends ResthopperParameter {

	public name: string = "CornerB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class InEllipseInput_CornerC_C extends ResthopperParameter {

	public name: string = "CornerC";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class InEllipseOutput_Ellipse_E extends ResthopperParameter {

	public name: string = "Ellipse";
	public nickName: string = "E";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class InEllipseOutput_Plane_P extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
