import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class LineTwoPlane extends ResthopperComponent {

	public guid: string = "510c4a63-b9bf-42e7-9d07-9d71290264da";
	public name: string = "Line2Plane";
	public category: string = "Curve";
	public subCategory: string = "Primitive";
	public description: string = "Create a line between two planes.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Line_L": LineTwoPlaneInput_Line_L,
		"PlaneA_A": LineTwoPlaneInput_PlaneA_A,
		"PlaneB_B": LineTwoPlaneInput_PlaneB_B,
	}

	public output:
	{
		"Line_L": LineTwoPlaneOutput_Line_L,
	}

	constructor() {
		super();
		this.input = {
			"Line_L": new LineTwoPlaneInput_Line_L(),
			"PlaneA_A": new LineTwoPlaneInput_PlaneA_A(),
			"PlaneB_B": new LineTwoPlaneInput_PlaneB_B(),
		}
		this.output = {
			"Line_L": new LineTwoPlaneOutput_Line_L(),
		}
	}

}

class LineTwoPlaneInput_Line_L extends ResthopperParameter {

	public name: string = "Line";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Line;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LineTwoPlaneInput_PlaneA_A extends ResthopperParameter {

	public name: string = "PlaneA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LineTwoPlaneInput_PlaneB_B extends ResthopperParameter {

	public name: string = "PlaneB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LineTwoPlaneOutput_Line_L extends ResthopperParameter {

	public name: string = "Line";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Line;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
