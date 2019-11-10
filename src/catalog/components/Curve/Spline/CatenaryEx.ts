import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CatenaryEx extends ResthopperComponent {

	public guid: string = "769f9064-17f5-4c4a-921f-c3a0ee05ba3a";
	public name: string = "CatenaryEx";
	public category: string = "Curve";
	public subCategory: string = "Spline";
	public description: string = "Create a variable catenary chain between two points.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"PointA_A": CatenaryExInput_PointA_A,
		"PointB_B": CatenaryExInput_PointB_B,
		"Lengths_L": CatenaryExInput_Lengths_L,
		"Weights_W": CatenaryExInput_Weights_W,
		"Gravity_G": CatenaryExInput_Gravity_G,
	}

	public output:
	{
		"Catenary_C": CatenaryExOutput_Catenary_C,
		"Segments_S": CatenaryExOutput_Segments_S,
	}

	constructor() {
		super();
		this.input = {
			"PointA_A": new CatenaryExInput_PointA_A(),
			"PointB_B": new CatenaryExInput_PointB_B(),
			"Lengths_L": new CatenaryExInput_Lengths_L(),
			"Weights_W": new CatenaryExInput_Weights_W(),
			"Gravity_G": new CatenaryExInput_Gravity_G(),
		}
		this.output = {
			"Catenary_C": new CatenaryExOutput_Catenary_C(),
			"Segments_S": new CatenaryExOutput_Segments_S(),
		}
	}

}

class CatenaryExInput_PointA_A extends ResthopperParameter {

	public name: string = "PointA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CatenaryExInput_PointB_B extends ResthopperParameter {

	public name: string = "PointB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CatenaryExInput_Lengths_L extends ResthopperParameter {

	public name: string = "Lengths";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CatenaryExInput_Weights_W extends ResthopperParameter {

	public name: string = "Weights";
	public nickName: string = "W";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CatenaryExInput_Gravity_G extends ResthopperParameter {

	public name: string = "Gravity";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CatenaryExOutput_Catenary_C extends ResthopperParameter {

	public name: string = "Catenary";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CatenaryExOutput_Segments_S extends ResthopperParameter {

	public name: string = "Segments";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
