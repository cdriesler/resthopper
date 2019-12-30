import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class LineTwoPlane extends ResthopperComponent {

	public guid: string = "510c4a63-b9bf-42e7-9d07-9d71290264da";
	public name: string = "Line 2Plane";
	public nickName: string = "Ln2Pl";
	public category: string = "Curve";
	public subCategory: string = "Primitive";
	public description: string = "Create a line between two planes.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"line_l": LineTwoPlaneInput_line_l,
		"planea_a": LineTwoPlaneInput_planea_a,
		"planeb_b": LineTwoPlaneInput_planeb_b,
	}

	public output:
	{
		"line_l": LineTwoPlaneOutput_line_l,
	}

	constructor() {
		super();
		this.input = {
			"line_l": new LineTwoPlaneInput_line_l(),
			"planea_a": new LineTwoPlaneInput_planea_a(),
			"planeb_b": new LineTwoPlaneInput_planeb_b(),
		}
		this.output = {
			"line_l": new LineTwoPlaneOutput_line_l(),
		}
	}

}

class LineTwoPlaneInput_line_l extends ResthopperParameter {

	public name: string = "Line";
	public nickName: string = "L";
	public description: string = "Guide line."
	public isOptional: boolean = false;
	public typeName: string = "Line"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LineTwoPlaneInput_planea_a extends ResthopperParameter {

	public name: string = "PlaneA";
	public nickName: string = "A";
	public description: string = "First plane to intersect with the guide."
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LineTwoPlaneInput_planeb_b extends ResthopperParameter {

	public name: string = "PlaneB";
	public nickName: string = "B";
	public description: string = "Second plane to intersect with the guide."
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LineTwoPlaneOutput_line_l extends ResthopperParameter {

	public name: string = "Line";
	public nickName: string = "L";
	public description: string = "Line segment between A and B"
	public isOptional: boolean = false;
	public typeName: string = "Line"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
