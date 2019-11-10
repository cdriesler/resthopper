import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Rectangle extends ResthopperComponent {

	public guid: string = "d93100b6-d50b-40b2-831a-814659dc38e3";
	public name: string = "Rectangle";
	public category: string = "Curve";
	public subCategory: string = "Primitive";
	public description: string = "Create a rectangle on a plane";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Plane_P": RectangleInput_Plane_P,
		"XSize_X": RectangleInput_XSize_X,
		"YSize_Y": RectangleInput_YSize_Y,
		"Radius_R": RectangleInput_Radius_R,
	}

	public output:
	{
		"Rectangle_R": RectangleOutput_Rectangle_R,
		"Length_L": RectangleOutput_Length_L,
	}

	constructor() {
		super();
		this.input = {
			"Plane_P": new RectangleInput_Plane_P(),
			"XSize_X": new RectangleInput_XSize_X(),
			"YSize_Y": new RectangleInput_YSize_Y(),
			"Radius_R": new RectangleInput_Radius_R(),
		}
		this.output = {
			"Rectangle_R": new RectangleOutput_Rectangle_R(),
			"Length_L": new RectangleOutput_Length_L(),
		}
	}

}

class RectangleInput_Plane_P extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RectangleInput_XSize_X extends ResthopperParameter {

	public name: string = "XSize";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Domain;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RectangleInput_YSize_Y extends ResthopperParameter {

	public name: string = "YSize";
	public nickName: string = "Y";
	public isOptional: boolean = false;
	public typeName: string = "Domain;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RectangleInput_Radius_R extends ResthopperParameter {

	public name: string = "Radius";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RectangleOutput_Rectangle_R extends ResthopperParameter {

	public name: string = "Rectangle";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RectangleOutput_Length_L extends ResthopperParameter {

	public name: string = "Length";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
