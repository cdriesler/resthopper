import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Contour extends ResthopperComponent {

	public guid: string = "88cff285-7f5e-41b3-96d5-9588ff9a52b1";
	public name: string = "Contour";
	public category: string = "Curve";
	public subCategory: string = "Division";
	public description: string = "Create a set of Curve contours";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Curve_C": ContourInput_Curve_C,
		"Point_P": ContourInput_Point_P,
		"Direction_N": ContourInput_Direction_N,
		"Distance_D": ContourInput_Distance_D,
	}

	public output:
	{
		"Contours_C": ContourOutput_Contours_C,
		"Parameters_t": ContourOutput_Parameters_t,
	}

	constructor() {
		super();
		this.input = {
			"Curve_C": new ContourInput_Curve_C(),
			"Point_P": new ContourInput_Point_P(),
			"Direction_N": new ContourInput_Direction_N(),
			"Distance_D": new ContourInput_Distance_D(),
		}
		this.output = {
			"Contours_C": new ContourOutput_Contours_C(),
			"Parameters_t": new ContourOutput_Parameters_t(),
		}
	}

}

class ContourInput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

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
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ContourOutput_Parameters_t extends ResthopperParameter {

	public name: string = "Parameters";
	public nickName: string = "t";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
