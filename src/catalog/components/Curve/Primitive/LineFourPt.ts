import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class LineFourPt extends ResthopperComponent {

	public guid: string = "b9fde5fa-d654-4306-8ee1-6b69e6757604";
	public name: string = "Line4Pt";
	public category: string = "Curve";
	public subCategory: string = "Primitive";
	public description: string = "Create a line from four points.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Line_L": LineFourPtInput_Line_L,
		"PointA_A": LineFourPtInput_PointA_A,
		"PointB_B": LineFourPtInput_PointB_B,
	}

	public output:
	{
		"Line_L": LineFourPtOutput_Line_L,
	}

	constructor() {
		super();
		this.input = {
			"Line_L": new LineFourPtInput_Line_L(),
			"PointA_A": new LineFourPtInput_PointA_A(),
			"PointB_B": new LineFourPtInput_PointB_B(),
		}
		this.output = {
			"Line_L": new LineFourPtOutput_Line_L(),
		}
	}

}

class LineFourPtInput_Line_L extends ResthopperParameter {

	public name: string = "Line";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Line;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LineFourPtInput_PointA_A extends ResthopperParameter {

	public name: string = "PointA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LineFourPtInput_PointB_B extends ResthopperParameter {

	public name: string = "PointB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LineFourPtOutput_Line_L extends ResthopperParameter {

	public name: string = "Line";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Line;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
