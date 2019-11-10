import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class RectangleThreePt extends ResthopperComponent {

	public guid: string = "9bc98a1d-2ecc-407e-948a-09a09ed3e69d";
	public name: string = "Rectangle3Pt";
	public category: string = "Curve";
	public subCategory: string = "Primitive";
	public description: string = "Create a rectangle from three points";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"PointA_A": RectangleThreePtInput_PointA_A,
		"PointB_B": RectangleThreePtInput_PointB_B,
		"PointC_C": RectangleThreePtInput_PointC_C,
	}

	public output:
	{
		"Rectangle_R": RectangleThreePtOutput_Rectangle_R,
		"Length_L": RectangleThreePtOutput_Length_L,
	}

	constructor() {
		super();
		this.input = {
			"PointA_A": new RectangleThreePtInput_PointA_A(),
			"PointB_B": new RectangleThreePtInput_PointB_B(),
			"PointC_C": new RectangleThreePtInput_PointC_C(),
		}
		this.output = {
			"Rectangle_R": new RectangleThreePtOutput_Rectangle_R(),
			"Length_L": new RectangleThreePtOutput_Length_L(),
		}
	}

}

class RectangleThreePtInput_PointA_A extends ResthopperParameter {

	public name: string = "PointA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RectangleThreePtInput_PointB_B extends ResthopperParameter {

	public name: string = "PointB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RectangleThreePtInput_PointC_C extends ResthopperParameter {

	public name: string = "PointC";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RectangleThreePtOutput_Rectangle_R extends ResthopperParameter {

	public name: string = "Rectangle";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Rectangle;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RectangleThreePtOutput_Length_L extends ResthopperParameter {

	public name: string = "Length";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
