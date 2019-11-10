import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class BrepPlane extends ResthopperComponent {

	public guid: string = "4fe828e8-fa95-4cc5-9a8c-c33856ecc783";
	public name: string = "BrepPlane";
	public category: string = "Intersect";
	public subCategory: string = "Mathematical";
	public description: string = "Solve intersection events for a Brep and a plane (otherwise known as section).";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Brep_B": BrepPlaneInput_Brep_B,
		"Plane_P": BrepPlaneInput_Plane_P,
	}

	public output:
	{
		"Curves_C": BrepPlaneOutput_Curves_C,
		"Points_P": BrepPlaneOutput_Points_P,
	}

	constructor() {
		super();
		this.input = {
			"Brep_B": new BrepPlaneInput_Brep_B(),
			"Plane_P": new BrepPlaneInput_Plane_P(),
		}
		this.output = {
			"Curves_C": new BrepPlaneOutput_Curves_C(),
			"Points_P": new BrepPlaneOutput_Points_P(),
		}
	}

}

class BrepPlaneInput_Brep_B extends ResthopperParameter {

	public name: string = "Brep";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Brep;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BrepPlaneInput_Plane_P extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BrepPlaneOutput_Curves_C extends ResthopperParameter {

	public name: string = "Curves";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BrepPlaneOutput_Points_P extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
