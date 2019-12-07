import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class BrepPlane extends ResthopperComponent {

	public guid: string = "4fe828e8-fa95-4cc5-9a8c-c33856ecc783";
	public name: string = "BrepPlane";
	public nickName: string = "Sec";
	public category: string = "Intersect";
	public subCategory: string = "Mathematical";
	public description: string = "Solve intersection events for a Brep and a plane (otherwise known as section).";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"brep_b": BrepPlaneInput_brep_b,
		"plane_p": BrepPlaneInput_plane_p,
	}

	public output:
	{
		"curves_c": BrepPlaneOutput_curves_c,
		"points_p": BrepPlaneOutput_points_p,
	}

	constructor() {
		super();
		this.input = {
			"brep_b": new BrepPlaneInput_brep_b(),
			"plane_p": new BrepPlaneInput_plane_p(),
		}
		this.output = {
			"curves_c": new BrepPlaneOutput_curves_c(),
			"points_p": new BrepPlaneOutput_points_p(),
		}
	}

}

class BrepPlaneInput_brep_b extends ResthopperParameter {

	public name: string = "Brep";
	public nickName: string = "B";
	public description: string = "Empty Brep parameter"
	public isOptional: boolean = false;
	public typeName: string = "Brep"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BrepPlaneInput_plane_p extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public description: string = "Empty Plane parameter"
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BrepPlaneOutput_curves_c extends ResthopperParameter {

	public name: string = "Curves";
	public nickName: string = "C";
	public description: string = "Empty Curve parameter"
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BrepPlaneOutput_points_p extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public description: string = "Empty Point parameter"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
