import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ExtrudePoint extends ResthopperComponent {

	public guid: string = "be6636b2-2f1a-4d42-897b-fdef429b6f17";
	public name: string = "ExtrudePoint";
	public category: string = "Surface";
	public subCategory: string = "Freeform";
	public description: string = "Extrude curves and surfaces to a point.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Base_B": ExtrudePointInput_Base_B,
		"Point_P": ExtrudePointInput_Point_P,
	}

	public output:
	{
		"Extrusion_E": ExtrudePointOutput_Extrusion_E,
	}

	constructor() {
		super();
		this.input = {
			"Base_B": new ExtrudePointInput_Base_B(),
			"Point_P": new ExtrudePointInput_Point_P(),
		}
		this.output = {
			"Extrusion_E": new ExtrudePointOutput_Extrusion_E(),
		}
	}

}

class ExtrudePointInput_Base_B extends ResthopperParameter {

	public name: string = "Base";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ExtrudePointInput_Point_P extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ExtrudePointOutput_Extrusion_E extends ResthopperParameter {

	public name: string = "Extrusion";
	public nickName: string = "E";
	public isOptional: boolean = false;
	public typeName: string = "Brep;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
