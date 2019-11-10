import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Contourex extends ResthopperComponent {

	public guid: string = "3e7e4827-6edd-4e10-93ac-cc234414d2b9";
	public name: string = "Contourex";
	public category: string = "Curve";
	public subCategory: string = "Division";
	public description: string = "Create a set of Curve contours";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Curve_C": ContourexInput_Curve_C,
		"Plane_P": ContourexInput_Plane_P,
		"Offsets_O": ContourexInput_Offsets_O,
		"Distances_D": ContourexInput_Distances_D,
	}

	public output:
	{
		"Contours_C": ContourexOutput_Contours_C,
		"Parameters_t": ContourexOutput_Parameters_t,
	}

	constructor() {
		super();
		this.input = {
			"Curve_C": new ContourexInput_Curve_C(),
			"Plane_P": new ContourexInput_Plane_P(),
			"Offsets_O": new ContourexInput_Offsets_O(),
			"Distances_D": new ContourexInput_Distances_D(),
		}
		this.output = {
			"Contours_C": new ContourexOutput_Contours_C(),
			"Parameters_t": new ContourexOutput_Parameters_t(),
		}
	}

}

class ContourexInput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ContourexInput_Plane_P extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ContourexInput_Offsets_O extends ResthopperParameter {

	public name: string = "Offsets";
	public nickName: string = "O";
	public isOptional: boolean = true;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ContourexInput_Distances_D extends ResthopperParameter {

	public name: string = "Distances";
	public nickName: string = "D";
	public isOptional: boolean = true;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ContourexOutput_Contours_C extends ResthopperParameter {

	public name: string = "Contours";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ContourexOutput_Parameters_t extends ResthopperParameter {

	public name: string = "Parameters";
	public nickName: string = "t";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
