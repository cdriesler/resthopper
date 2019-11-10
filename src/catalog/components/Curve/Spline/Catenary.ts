import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Catenary extends ResthopperComponent {

	public guid: string = "275671d4-3e87-40bd-8aff-8e6a5fdbb892";
	public name: string = "Catenary";
	public category: string = "Curve";
	public subCategory: string = "Spline";
	public description: string = "Create a catenary chain between two points.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"PointA_A": CatenaryInput_PointA_A,
		"PointB_B": CatenaryInput_PointB_B,
		"Length_L": CatenaryInput_Length_L,
		"Gravity_G": CatenaryInput_Gravity_G,
	}

	public output:
	{
		"Catenary_C": CatenaryOutput_Catenary_C,
	}

	constructor() {
		super();
		this.input = {
			"PointA_A": new CatenaryInput_PointA_A(),
			"PointB_B": new CatenaryInput_PointB_B(),
			"Length_L": new CatenaryInput_Length_L(),
			"Gravity_G": new CatenaryInput_Gravity_G(),
		}
		this.output = {
			"Catenary_C": new CatenaryOutput_Catenary_C(),
		}
	}

}

class CatenaryInput_PointA_A extends ResthopperParameter {

	public name: string = "PointA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CatenaryInput_PointB_B extends ResthopperParameter {

	public name: string = "PointB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CatenaryInput_Length_L extends ResthopperParameter {

	public name: string = "Length";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CatenaryInput_Gravity_G extends ResthopperParameter {

	public name: string = "Gravity";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CatenaryOutput_Catenary_C extends ResthopperParameter {

	public name: string = "Catenary";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
