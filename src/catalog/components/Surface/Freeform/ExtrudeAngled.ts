import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ExtrudeAngled extends ResthopperComponent {

	public guid: string = "ae57e09b-a1e4-4d05-8491-abd232213bc9";
	public name: string = "ExtrudeAngled";
	public category: string = "Surface";
	public subCategory: string = "Freeform";
	public description: string = "Extrude a planar polyline at angles";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Polyline_P": ExtrudeAngledInput_Polyline_P,
		"Baseheight_Hb": ExtrudeAngledInput_Baseheight_Hb,
		"Topheight_Ht": ExtrudeAngledInput_Topheight_Ht,
		"Angles_A": ExtrudeAngledInput_Angles_A,
	}

	public output:
	{
		"Shape_S": ExtrudeAngledOutput_Shape_S,
	}

	constructor() {
		super();
		this.input = {
			"Polyline_P": new ExtrudeAngledInput_Polyline_P(),
			"Baseheight_Hb": new ExtrudeAngledInput_Baseheight_Hb(),
			"Topheight_Ht": new ExtrudeAngledInput_Topheight_Ht(),
			"Angles_A": new ExtrudeAngledInput_Angles_A(),
		}
		this.output = {
			"Shape_S": new ExtrudeAngledOutput_Shape_S(),
		}
	}

}

class ExtrudeAngledInput_Polyline_P extends ResthopperParameter {

	public name: string = "Polyline";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ExtrudeAngledInput_Baseheight_Hb extends ResthopperParameter {

	public name: string = "Baseheight";
	public nickName: string = "Hb";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ExtrudeAngledInput_Topheight_Ht extends ResthopperParameter {

	public name: string = "Topheight";
	public nickName: string = "Ht";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ExtrudeAngledInput_Angles_A extends ResthopperParameter {

	public name: string = "Angles";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ExtrudeAngledOutput_Shape_S extends ResthopperParameter {

	public name: string = "Shape";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Brep;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
