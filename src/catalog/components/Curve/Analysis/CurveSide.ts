import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CurveSide extends ResthopperComponent {

	public guid: string = "bb2e13da-09ca-43fd-bef8-8d71f3653af9";
	public name: string = "CurveSide";
	public category: string = "Curve";
	public subCategory: string = "Analysis";
	public description: string = "Find on which side of a curve a point exists";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Curve_C": CurveSideInput_Curve_C,
		"Point_P": CurveSideInput_Point_P,
		"Plane_Pl": CurveSideInput_Plane_Pl,
	}

	public output:
	{
		"Side_S": CurveSideOutput_Side_S,
		"Left_L": CurveSideOutput_Left_L,
		"Right_R": CurveSideOutput_Right_R,
	}

	constructor() {
		super();
		this.input = {
			"Curve_C": new CurveSideInput_Curve_C(),
			"Point_P": new CurveSideInput_Point_P(),
			"Plane_Pl": new CurveSideInput_Plane_Pl(),
		}
		this.output = {
			"Side_S": new CurveSideOutput_Side_S(),
			"Left_L": new CurveSideOutput_Left_L(),
			"Right_R": new CurveSideOutput_Right_R(),
		}
	}

}

class CurveSideInput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveSideInput_Point_P extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveSideInput_Plane_Pl extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "Pl";
	public isOptional: boolean = true;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveSideOutput_Side_S extends ResthopperParameter {

	public name: string = "Side";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveSideOutput_Left_L extends ResthopperParameter {

	public name: string = "Left";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveSideOutput_Right_R extends ResthopperParameter {

	public name: string = "Right";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
