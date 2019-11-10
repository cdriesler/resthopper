import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ArcSED extends ResthopperComponent {

	public guid: string = "9d2583dd-6cf5-497c-8c40-c9a290598396";
	public name: string = "ArcSED";
	public category: string = "Curve";
	public subCategory: string = "Primitive";
	public description: string = "Create an arc defined by start point, end point and a tangent vector.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Start_S": ArcSEDInput_Start_S,
		"End_E": ArcSEDInput_End_E,
		"Direction_D": ArcSEDInput_Direction_D,
	}

	public output:
	{
		"Arc_A": ArcSEDOutput_Arc_A,
		"Plane_P": ArcSEDOutput_Plane_P,
		"Radius_R": ArcSEDOutput_Radius_R,
	}

	constructor() {
		super();
		this.input = {
			"Start_S": new ArcSEDInput_Start_S(),
			"End_E": new ArcSEDInput_End_E(),
			"Direction_D": new ArcSEDInput_Direction_D(),
		}
		this.output = {
			"Arc_A": new ArcSEDOutput_Arc_A(),
			"Plane_P": new ArcSEDOutput_Plane_P(),
			"Radius_R": new ArcSEDOutput_Radius_R(),
		}
	}

}

class ArcSEDInput_Start_S extends ResthopperParameter {

	public name: string = "Start";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ArcSEDInput_End_E extends ResthopperParameter {

	public name: string = "End";
	public nickName: string = "E";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ArcSEDInput_Direction_D extends ResthopperParameter {

	public name: string = "Direction";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ArcSEDOutput_Arc_A extends ResthopperParameter {

	public name: string = "Arc";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ArcSEDOutput_Plane_P extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ArcSEDOutput_Radius_R extends ResthopperParameter {

	public name: string = "Radius";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
