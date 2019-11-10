import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Contour extends ResthopperComponent {

	public guid: string = "3b112fb6-3eba-42d2-ba75-0f903c18faab";
	public name: string = "Contour";
	public category: string = "Intersect";
	public subCategory: string = "Mathematical";
	public description: string = "Create a set of Brep or Mesh contours";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Shape_S": ContourInput_Shape_S,
		"Point_P": ContourInput_Point_P,
		"Direction_N": ContourInput_Direction_N,
		"Distance_D": ContourInput_Distance_D,
	}

	public output:
	{
		"Contours_C": ContourOutput_Contours_C,
	}

	constructor() {
		super();
		this.input = {
			"Shape_S": new ContourInput_Shape_S(),
			"Point_P": new ContourInput_Point_P(),
			"Direction_N": new ContourInput_Direction_N(),
			"Distance_D": new ContourInput_Distance_D(),
		}
		this.output = {
			"Contours_C": new ContourOutput_Contours_C(),
		}
	}

}

class ContourInput_Shape_S extends ResthopperParameter {

	public name: string = "Shape";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ContourInput_Point_P extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ContourInput_Direction_N extends ResthopperParameter {

	public name: string = "Direction";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ContourInput_Distance_D extends ResthopperParameter {

	public name: string = "Distance";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ContourOutput_Contours_C extends ResthopperParameter {

	public name: string = "Contours";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
